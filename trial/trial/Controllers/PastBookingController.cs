using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using trial.Models;
using System.Web.Http.Cors;

namespace trial.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class PastBookingController : ApiController
    {
        private Bus_ProjectEntities db = new Bus_ProjectEntities();

        [HttpGet]
        public HttpResponseMessage Getbooking([FromUri]int id)
        {
            List<getpastbookings_Result> res = null;
            res = db.getpastbookings(id).ToList();
            if (res == null)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "No past bookings exist for this route");

            }
            return Request.CreateResponse(res);
        }
    }
}
