using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using trial.Models;

namespace trial.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class BookgenerateController : ApiController
    {
        Bus_ProjectEntities db = new Bus_ProjectEntities();
        public void Post(Booking b)
        {
            db.Bookings.Add(b);
            db.SaveChanges();
        }

        [Route("api/Bookgenerate/PendingBooking")]
        public HttpResponseMessage PendingBooking(Booking b)
        {
            //var result null;
            Bus_ProjectEntities db = new Bus_ProjectEntities();
            var result = db.sp_pendingBook().FirstOrDefault();
            if (result == null)
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "No Record");
            else
                return Request.CreateResponse(result);
        }

    }
    
    
}
