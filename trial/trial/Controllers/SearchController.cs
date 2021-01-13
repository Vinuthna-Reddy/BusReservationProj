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
    public class SearchController : ApiController
    {
        private Bus_ProjectEntities db = new Bus_ProjectEntities();

        [HttpPost]
        public HttpResponseMessage Getbuses(Travel travel)
        {
            List<getallbusdetails_Result> res = null;
            res = db.getallbusdetails(travel.pickup_place, travel.drop_place, travel.Departure_Time).ToList();
            if (res == null)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "No buses exist for this route");

            }
            return Request.CreateResponse(res);
        }
    }
}
