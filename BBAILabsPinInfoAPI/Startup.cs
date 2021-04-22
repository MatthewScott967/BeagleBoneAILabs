using System;
using System.Collections.Generic;

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;

using Newtonsoft.Json;
using BBAILabsPinInfoAPI.Models;

namespace BBAILabsPinInfoAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddDefaultPolicy(
                    builder =>
                    {
                        builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader(); 
                    });
            });

            services.AddDbContext<PinInfoContext>(opt => opt.UseInMemoryDatabase("PinInfoTable"));
            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }   

            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseRouting();
            app.UseCors();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            // seed the database from json file

            string jsonString = System.IO.File.ReadAllText(@"pininfo.json");

            if (!String.IsNullOrEmpty(jsonString))
            {
                List<PinInfoItem> pinInfoItems = JsonConvert.DeserializeObject<List<PinInfoItem>>(jsonString);

                using (var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
                {
                    var context = serviceScope.ServiceProvider.GetService<PinInfoContext>();

                    context.AddRange(pinInfoItems);
                    context.SaveChanges();
                }
            }
        }
    }
}
