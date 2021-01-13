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
    public class UserController : ApiController
    {
        private Bus_ProjectEntities db = new Bus_ProjectEntities();

        // GET: api/User
        public IQueryable<Registered_User> GetRegistered_User()
        {
            return db.Registered_User;
        }

        // GET: api/User/5
        [ResponseType(typeof(Registered_User))]
        public IHttpActionResult GetRegistered_User(int id)
        {
            Registered_User registered_User = db.Registered_User.Find(id);
            if (registered_User == null)
            {
                return NotFound();
            }

            return Ok(registered_User);
        }

       /* public void Put(int id, Registered_User r)
        {
            Registered_User Updateuser = db.Registered_User.Find(id);
            Updateuser.fname = r.fname;
            Updateuser.lname = r.lname;
            Updateuser.username = r.username;
            Updateuser.password = r.password;
            Updateuser.phone_no = r.phone_no;
            Updateuser.wallet = r.wallet;
            Updateuser.email_id = r.email_id;
            db.SaveChanges();
        }*/
        // PUT: api/User/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutRegistered_User(int id, Registered_User registered_User)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != registered_User.user_id)
            {
                return BadRequest();
            }

            db.Entry(registered_User).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Registered_UserExists(id))
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

        // POST: api/User
        [ResponseType(typeof(Registered_User))]
        public IHttpActionResult PostRegistered_User(Registered_User registered_User)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Registered_User.Add(registered_User);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = registered_User.user_id }, registered_User);
        }

        // DELETE: api/User/5
        [ResponseType(typeof(Registered_User))]
        public IHttpActionResult DeleteRegistered_User(int id)
        {
            Registered_User registered_User = db.Registered_User.Find(id);
            if (registered_User == null)
            {
                return NotFound();
            }

            db.Registered_User.Remove(registered_User);
            db.SaveChanges();

            return Ok(registered_User);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Registered_UserExists(int id)
        {
            return db.Registered_User.Count(e => e.user_id == id) > 0;
        }
    }
}