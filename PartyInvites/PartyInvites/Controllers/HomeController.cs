using System;
using Microsoft.AspNetCore.Mvc;
using PartyInvites.Models;
using System.Linq;


namespace PartyInvites.Controllers
{
    public class HomeController : Controller
    {
        public ViewResult Index()
        {
            int hour = DateTime.Now.Hour;
            ViewBag.Greeting = hour < 12 ? "Good Morning" : "GA";
            return View("MyView");
        }
        [HttpGet]
       public ViewResult RsvpForm()
        {
            return View();
        }
        [HttpPost]
        public ViewResult RsvpForm(GuestResponse guestResponce)
        {
            if (ModelState.IsValid)
            {
                Repository.AddResponse(guestResponce);
                return View("Thanks", guestResponce);
            }
            else
            {
                return View();
            }
        }
        public ViewResult ListResponses()
        {
            return View(Repository.Responses.Where(r => r.WillAttend == true));
        }
    }
}
