# https://hub.docker.com/_/microsoft-dotnet
FROM mcr.microsoft.com/dotnet/sdk:5.0-focal AS build
WORKDIR /source/BBAILabsPinInfoAPI
ENV ASPNETCORE_URLS=http://+:5000

# copy csproj and restore as distinct layers
COPY *.csproj .
RUN dotnet restore -r linux-x64

# copy everything else and build app
COPY . .
RUN dotnet publish -c release -o /app -r linux-x64 --self-contained true --no-restore /p:PublishTrimmed=true /p:PublishReadyToRun=true /p:PublishSingleFile=true

# final stage/image
FROM mcr.microsoft.com/dotnet/runtime-deps:5.0-focal-amd64
WORKDIR /app
ENV ASPNETCORE_URLS=http://+:5000
COPY --from=build /app ./
ENTRYPOINT ["./BBAILabsPinInfoAPI"]
