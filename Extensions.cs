using Microsoft.AspNetCore.Identity;

namespace Turism.WS.Extensions
{

   public static class MiddlewareExtensions
    {
        public static IApplicationBuilder UseCustomMiddlewares(this IApplicationBuilder builder)
        {
            // builder.UseMiddleware<GeneralMiddleware>();         
            return builder;
        }
        
    }

}