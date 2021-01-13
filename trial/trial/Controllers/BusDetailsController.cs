using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using trial.Models;
using System.Web.Http.Cors;

namespace trial.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class BusDetailsController : ApiController
    {
        private Bus_ProjectEntities db = new Bus_ProjectEntities();

        // GET: api/BusDetails
        public IQueryable<Bus_Details> GetBus_Details()
        {
            return db.Bus_Details;
        }

        // GET: api/BusDetails/5
        [ResponseType(typeof(Bus_Details))]
        public IHttpActionResult GetBus_Details(int id)
        {
            Bus_Details bus_Details = db.Bus_Details.Find(id);
            if (bus_Details == null)
            {
                return NotFound();
            }

            return Ok(bus_Details);
        }

        // PUT: api/BusDetails/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutBus_Details(int id, Bus_Details bus_Details)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != bus_Details.Bus_ID)
            {
                return BadRequest();
            }

            db.Entry(bus_Details).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Bus_DetailsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/BusDetails
        [ResponseType(typeof(Bus_Details))]
        public IHttpActionResult PostBus_Details(Bus_Details bus_Details)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Bus_Details.Add(bus_Details);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = bus_Details.Bus_ID }, bus_Details);
        }

        // DELETE: api/BusDetails/5
        [ResponseType(typeof(Bus_Details))]
        public IHttpActionResult DeleteBus_Details(int id)
        {
            Bus_Details bus_Details = db.Bus_Details.Find(id);
            if (bus_Details == null)
            {
                return NotFound();
            }

            db.Bus_Details.Remove(bus_Details);
            db.SaveChanges();

            return Ok(bus_Details);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Bus_DetailsExists(int id)
        {
            return db.Bus_Details.Count(e => e.Bus_ID == id) > 0;
        }
    }
}