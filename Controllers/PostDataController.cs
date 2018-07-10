using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using Newtonsoft.Json;


// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AspCorePrototype.Controllers
{
    [Route("api/[controller]")]
    public class PostDataController : Controller
    {
        [HttpGet("[action]")]
        public async Task<IActionResult> GetPosts()
        {
                using (var client = new HttpClient())
                {
                    try
                    {
                        client.BaseAddress = new Uri("https://jsonplaceholder.typicode.com");
                    var response = await client.GetAsync("/posts");
                        response.EnsureSuccessStatusCode();

                        var stringResult = await response.Content.ReadAsStringAsync();
                        return Ok(stringResult);
                    }
                    catch (HttpRequestException httpRequestException)
                    {
                        return BadRequest($"Error getting posts: {httpRequestException.Message}");
                    }
                }
        }
    }
}
