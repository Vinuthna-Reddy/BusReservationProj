using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using trial.Models;

namespace Bus_Login.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class SeatsController : ApiController
    {
        Bus_ProjectEntities db = new Bus_ProjectEntities();
        [HttpPost]
        public HttpResponseMessage Get_BookedSeats(Seat s)
        {
            List<int?> result = null;
            result = db.sp_BookedSeats(s.Bus_ID, s.seat_status).ToList();
            if (result == null)
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "NO record");
            else
                return Request.CreateResponse(result);
        }
        [Route("api/seats/Post")]
        public void Post(Seat s)
        {
            db.Seats.Add(s);
            db.SaveChanges();
        }
    }
}
