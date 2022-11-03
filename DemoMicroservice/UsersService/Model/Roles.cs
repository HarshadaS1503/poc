using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace UsersService.Model
{
    public class Roles
    {
        [Key]
        public int RolesID { get; set; }

        public string RoleName { get; set; }
    }
}
