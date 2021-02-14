using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BBAILabsWebSite.Models;

namespace BBAILabsWebSite.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PinInfoItemsController : ControllerBase
    {
        private readonly PinInfoContext _context;

        public PinInfoItemsController(PinInfoContext context)
        {
            _context = context;
        }

        // GET: api/PinInfoItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PinInfoItem>>> GetPinInfoItems(string  pinName, string signalName)
        {
            var pinInfoItems = from p in _context.PinInfoItems select p;

            // Search by pinName

            if (!String.IsNullOrEmpty(pinName))
            {
                pinInfoItems = pinInfoItems.Where(p => p.Id.Contains(pinName, StringComparison.CurrentCultureIgnoreCase));
                pinInfoItems = pinInfoItems.OrderBy(p => p.RegisterAddress);
            }

            else if (!String.IsNullOrEmpty(signalName))
            {
                pinInfoItems = pinInfoItems.Where(p => 
                    p.Mode00Signal.Contains(signalName, StringComparison.CurrentCultureIgnoreCase) ||
                    p.Mode01Signal.Contains(signalName, StringComparison.CurrentCultureIgnoreCase) ||
                    p.Mode02Signal.Contains(signalName, StringComparison.CurrentCultureIgnoreCase) ||
                    p.Mode03Signal.Contains(signalName, StringComparison.CurrentCultureIgnoreCase) ||
                    p.Mode04Signal.Contains(signalName, StringComparison.CurrentCultureIgnoreCase) ||
                    p.Mode05Signal.Contains(signalName, StringComparison.CurrentCultureIgnoreCase) ||
                    p.Mode06Signal.Contains(signalName, StringComparison.CurrentCultureIgnoreCase) ||
                    p.Mode07Signal.Contains(signalName, StringComparison.CurrentCultureIgnoreCase) ||
                    p.Mode08Signal.Contains(signalName, StringComparison.CurrentCultureIgnoreCase) ||
                    p.Mode09Signal.Contains(signalName, StringComparison.CurrentCultureIgnoreCase) ||
                    p.Mode10Signal.Contains(signalName, StringComparison.CurrentCultureIgnoreCase) ||
                    p.Mode11Signal.Contains(signalName, StringComparison.CurrentCultureIgnoreCase) ||
                    p.Mode12Signal.Contains(signalName, StringComparison.CurrentCultureIgnoreCase) ||
                    p.Mode13Signal.Contains(signalName, StringComparison.CurrentCultureIgnoreCase) ||
                    p.Mode14Signal.Contains(signalName, StringComparison.CurrentCultureIgnoreCase) ||
                    p.Mode15Signal.Contains(signalName, StringComparison.CurrentCultureIgnoreCase));

                pinInfoItems = pinInfoItems.OrderBy(p => p.RegisterAddress);
            }

            return await pinInfoItems.ToListAsync();
        }

        // GET: api/PinInfoItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PinInfoItem>> GetPinInfoItem(string id)
        {
            var pinInfoItem = await _context.PinInfoItems.FindAsync(id);

            if (pinInfoItem == null)
            {
                return NotFound();
            }

            return pinInfoItem;
        }

        // PUT: api/PinInfoItems/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPinInfoItem(string id, PinInfoItem pinInfoItem)
        {
            if (id != pinInfoItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(pinInfoItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PinInfoItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/PinInfoItems
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PinInfoItem>> PostPinInfoItem(PinInfoItem pinInfoItem)
        {
            _context.PinInfoItems.Add(pinInfoItem);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (PinInfoItemExists(pinInfoItem.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction(nameof(GetPinInfoItem), new { id = pinInfoItem.Id }, pinInfoItem);
        }

        // DELETE: api/PinInfoItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePinInfoItem(string id)
        {
            var pinInfoItem = await _context.PinInfoItems.FindAsync(id);
            if (pinInfoItem == null)
            {
                return NotFound();
            }

            _context.PinInfoItems.Remove(pinInfoItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PinInfoItemExists(string id)
        {
            return _context.PinInfoItems.Any(e => e.Id == id);
        }
    }
}
