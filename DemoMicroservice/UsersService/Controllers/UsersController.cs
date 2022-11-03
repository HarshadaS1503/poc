using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UsersService.EFCoreSetUp;
using UsersService.Model;

namespace UsersService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        RolesContext rolesContext;
        public UsersController()
        {
            rolesContext = new RolesContext();
        }
        [HttpGet]
        public IEnumerable<Roles> GetRoles()
        {

            return rolesContext.Roles.ToList();
        }

        [HttpPost]
        [Route("InsertRole")]
        public IActionResult InsertRole([FromBody] Roles objRoles)
        {
            try
            {
                rolesContext.Roles.Add(objRoles);
                rolesContext.SaveChanges();
                return StatusCode(StatusCodes.Status201Created);

            } 
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,ex); ;
            }
             
        }
    }
}
