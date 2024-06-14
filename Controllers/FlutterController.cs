using Microsoft.AspNetCore.Mvc;

namespace Turism.WS.Controllers
{
  [ApiController]
  [Route("api/v1/ws.do")]
  public class FlutterController : ControllerBase
  {

    [HttpGet("call/create")]
    public string CallCreate ()
    {
      return "Call Create";
    }

    [HttpGet("call/{callId}/action/create")]
    public string CallActionCreate ()
    {
      return "Call Create";
    }

    [HttpGet("call/{callId}/chat/create")]
    public string CallChatCreate ()
    {
      return "Call Create";
    }

  }

  

}