

using Microsoft.AspNetCore.SignalR;

namespace Turism.WS.Listeners
{

  public class CallHub : Hub
  {

    public override async Task OnConnectedAsync()
    {
        // Extract access token from the query string
        var httpContext = Context.GetHttpContext();
        var accessToken = httpContext.Request.Query["access_token"];

        // Print the access token to the server logs or debug console
        Console.WriteLine($"Access token: {accessToken}");

        await base.OnConnectedAsync();

    }

    public async Task SendMessage(string message)
    {
      Console.WriteLine(message);
      await this.Clients.All.SendAsync("ReceiveMessageResponse", message); 
      // await this.Clients.User();
    }

  }

}