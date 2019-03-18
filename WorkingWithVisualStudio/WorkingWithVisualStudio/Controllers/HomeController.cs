using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WorkingWithVisualStudio.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WorkingWithVisualStudio.Controllers
{
	public class HomeController : Controller
	{
		// GET: /<controller>/
		public IActionResult Index() => View(SimpleRepository.SharedRepository.Products);
	}
}
