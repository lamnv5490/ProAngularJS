using AngularJSAuthentication.API.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Threading.Tasks;

namespace AngularJSAuthentication.API
{
    public class AuthRepository : IDisposable
    {
        private AuthContext _dbContext;

        private UserManager<IdentityUser> _userManager;

        public AuthRepository()
        {
            _dbContext = new AuthContext();
            _userManager = new UserManager<IdentityUser>(new UserStore<IdentityUser>(_dbContext));
        }

        public async Task<IdentityResult> RegisterUser(UserModel userModel)
        {
            var user = new IdentityUser { UserName = userModel.UserName };

            var result = await _userManager.CreateAsync(user, userModel.Password);

            return result;
        }

        public async Task<IdentityUser> FindUser(string username, string password)
        {
            var user = await _userManager.FindAsync(username, password);

            return user;
        }

        public void Dispose()
        {
            _dbContext.Dispose();
            _userManager.Dispose();
        }
    }
}