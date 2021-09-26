using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;

namespace StockProfileMgmt.Web.Controllers
{
    [Authorize]
    public class AppController : Controller
    {
        public IActionResult Home()
        {
            return this.RedirectToAction("Index");
        }

        
        public IActionResult Index()
        {
            return this.View("Index");
        }
    }
}
