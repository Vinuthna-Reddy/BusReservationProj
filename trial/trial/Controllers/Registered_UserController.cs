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
    public class Registered_UserController : ApiController
    {
        Bus_ProjectEntities db = new Bus_ProjectEntities();
        [HttpPost]
        public HttpResponseMessage UserLogin(Registered_User u)
        {
            //var result null;
            var result = db.sp_LoginCheck1(u.username, u.password).FirstOrDefault();
            if (result == null)
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Invalid Username Or Password");
            else
                return Request.CreateResponse(result);
        }
        [Route("api/Registered_user/Post")]
        public void Post(Registered_User c)
        {
            db.Registered_User.Add(c);
            db.SaveChanges();
        }
    }
}
