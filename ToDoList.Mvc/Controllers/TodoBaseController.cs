using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace ToDoList.Mvc.Controllers
{
    public class TodoBaseController : Controller
    {       
        protected int CurrentUserId => int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
    }
}
