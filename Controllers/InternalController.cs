using Microsoft.AspNetCore.Mvc;

namespace Turism.WS.Controllers
{
  [ApiController]
  [Route("api/v1/ws.do")]
  public class InternalController : ControllerBase
  {

    [HttpGet("user/online/get")]
    public string GetOnlineUser ()
    {
      return "Get Online Users";
    }

  }

}