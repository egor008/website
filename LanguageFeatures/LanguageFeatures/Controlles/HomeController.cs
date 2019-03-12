using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using LanguageFeatures.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace LanguageFeatures.Controlles
{
    public class HomeController : Controller
    {
        // GET: /<controller>/
        public ViewResult Index()
        {
            //List<string> results = new List<string>();

            //foreach (Product p in Product.GetProducts())
            //{
            //    string name = p?.Name ?? "<No Name>";
            //    decimal? price = p?.Price ?? 0;
            //    string relatedName = p?.Relater?.Name ?? "<None>";
            //    results.Add($"Name: { name }, Price: {price}, Related: {relatedName}");
            //}
            //return View(results);



            //Dictionary<string, Product> products = new Dictionary<string, Product>
            //{
            //    ["Kayak"] = new Product {Name = "Kayak", Price = 275M},
            //    ["Lifejacket"] = new Product{Name = "Lifejacket", Price = 48.95M}
            //};
            //return View("Index", products.Keys);


            ShoppingCart cart = new ShoppingCart { Products = Product.GetProducts() };
            decimal cartTotal = cart.TotalPrices();
            return View("Index", new string[] { $"Total: {cartTotal:C2}" });
        }
    }
}
