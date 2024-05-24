const AccessToken = () => {
    return (
        <div>
            <h3 className="text-2xl font-medium text-center">What is an access token and refresh token? How do they work and where should
                we store them on the client side?</h3>
            <div className="p-4 rounded-lg">
                <img src="https://i.ibb.co/bBLLG8C/token.png" alt="token-image" className="h-full w-full rounded-lg" />
            </div>
            <p className="pr-6 text-right">Published at : 24th May , 2024</p>
            <div className="p-4">
                <h4 className="text-xl font-medium mt-4">What is Access Token?</h4>

                <p className="mt-2">Access tokens are used in token-based authentication to allow an application to access an API. The application receives an access token after a user successfully authenticates and authorizes access, then passes the access token as a credential when it calls the target API. The passed token informs the API that the bearer of the token has been authorized to access the API and perform specific actions specified by the Scope that was granted during authorization.</p>

                <p className="mt-2">In addition, if you have chosen to allow users to log in through an Identity Provider (IdP), such as Facebook, the IdP will issue its own access token to allow your application to call the IDP's API. For example, if your user authenticates using Facebook, the access token issued by Facebook can be used to call the Facebook Graph API. These tokens are controlled by the IdP and can be issued in any format. See <a href="https://auth0.com/docs/secure/tokens/access-tokens/identity-provider-access-tokens" className="text-blue-400 cursor-pointer underline" target="_blank">Identity Provider Access Tokens</a> for details.</p>



                <h4 className="text-xl font-medium mt-4">JWT Access Token</h4>

                <p className="mt-2">JSON Web Token (JWT) access tokens conform to the <a href="https://datatracker.ietf.org/doc/html/rfc7519" className="text-blue-400 cursor-pointer underline" target="_blank">JWT standard</a>  and contain information about an entity in the form of claims. They are self-contained therefore it is not necessary for the recipient to call a server to validate the token.</p>

                <p className="mt-2">Access tokens issued for the Management API and access tokens issued for any custom API that you have registered with Auth0 follow the JWT standard, which means that their basic structure conforms to the typical <a href="https://auth0.com/docs/secure/tokens/json-web-tokens/json-web-token-structure" className="text-blue-400 cursor-pointer underline" target="_blank">JWT structure</a>, and they contain standard JWT claims asserted about the token itself.</p>


                <h4 className="text-xl font-medium mt-4">Custom API access tokens</h4>

                <p className="mt-2">If validation of your custom API access token fails, make sure it was issued with your custom API as the audience. To learn more, see <a href="https://auth0.com/docs/secure/tokens/access-tokens/get-access-tokens" className="text-blue-400 cursor-pointer underline" target="_blank">Get Access Tokens.</a> </p>



                <h4 className="text-xl font-medium mt-4">Sample access token</h4>

                <p className="mt-2">This example shows the contents of an access token. Notice that the token only contains authorization information about the actions the application is allowed to perform at the API (such permissions are referred to as scopes).</p>

                <div className="p-6">
                    <img src="https://i.ibb.co/c6cYykf/snippet1.png" alt="" className="w-full h-full"/>
                    <p className="pt-2 text-right">was it helpful ? <a href="#" className="text-blue-400 cursor-pointer">yes</a> / <a href="#" className="text-blue-400 cursor-pointer">no</a>  </p>
                </div>

                <p className="mt-2">The token does not contain any information about the user except for the user ID (located in the sub claim). In many cases, you may find it useful to retrieve additional user information. You can do this by calling the userinfo API endpoint with the Access Token. Be sure that the API for which the Access Token is issued uses the RS256 <a href="https://auth0.com/docs/get-started/applications/signing-algorithms"  className="text-blue-400 cursor-pointer underline" target="_blank">signing algorithm.</a> </p>


                <h4 className="text-xl font-medium mt-8 md:mt-12">What is Refresh Token?</h4>

                <p className="mt-2">As mentioned, for security purposes, access tokens may be valid for a short amount of time. Once they expire, client applications can use a refresh token to "refresh" the access token. That is, a refresh token is a credential artifact that lets a client application get new access tokens without having to ask the user to log in again.</p>

                <div className="p-6">
                    <img src="https://i.ibb.co/cDqfwtJ/refreshtoken.png" alt="" className="w-full h-full"/>
                </div>

                <p className="mt-2">The client application can get a new access token as long as the refresh token is valid and unexpired. Consequently, a refresh token that has a very long lifespan could theoretically give infinite power to the token bearer to get a new access token to access protected resources anytime. The bearer of the refresh token could be a legitimate user or a malicious user. As such, security companies, such as Auth0, create mechanisms to ensure that this powerful token is mainly held and used continuously by the intended parties.</p>



                <h4 className="text-xl font-medium mt-4">When to Use Refresh Tokens</h4>

                <p className="mt-2">It's important to keep in mind that the OAuth 2.0 specification defines access tokens and refresh tokens. So, if we were to discuss authorization strategies in terms of other identity protocols or frameworks, such as SAML, we would not have the concepts of access tokens or refresh tokens.</p>

                <p className="mt-2">For those involved with web development, access token and refresh tokens are common talk because the web extensively uses token-based authorization and authentication through the OAuth 2.0 framework and the OpenID Connect protocol.</p>

                <p className="mt-2">When combined, OAuth 2.0 and OIDC bring to life an array of authorization and authentication flows. Each flow has its own set of benefits and caveats that define the best scenarios and architecture where we should use access and refresh tokens.</p>

                <ul className="mt-4 space-y-3">
                    <li className="list-disc list-inside">Is the client a traditional web application executing on the server? Use the 
                    <a href="https://auth0.com/docs/get-started/authentication-and-authorization-flow#authorization-code-flow"  className="text-blue-400 cursor-pointer underline" target="_blank">Authorization Code Flow.</a></li>

                    <li className="list-disc list-inside">Is the client a Single-Page Application (SPA)? Use <a href="https://auth0.com/docs/get-started/authentication-and-authorization-flow#implicit-flow-with-form-post"  className="text-blue-400 cursor-pointer underline" target="_blank">Authorization Code Flow with Proof Key for Code Exchange (PKCE).</a> </li>

                    <li className="list-disc list-inside">Is the client a Single-Page Application (SPA) that doesn't need an access token? Use the <a href="https://auth0.com/docs/get-started/authentication-and-authorization-flow#implicit-flow-with-form-post"  className="text-blue-400 cursor-pointer underline" target="_blank"> Implicit Flow with Form Post.</a></li>
                    <li className="list-disc list-inside">Is the client the resource owner? You may use the <a href="https://auth0.com/docs/get-started/authentication-and-authorization-flow#client-credentials-flow"  className="text-blue-400 cursor-pointer underline" target="_blank">Client Credentials Flow.</a></li>
                    <li className="list-disc list-inside">Is the client absolutely trusted with user credentials? You may use the  <a href="https://auth0.com/docs/get-started/authentication-and-authorization-flow#resource-owner-password-flow"  className="text-blue-400 cursor-pointer underline" target="_blank">Resource Owner Password Flow.</a> </li>
                </ul>

                <p className="mt-6">If there's an app for that, there's also a flow for that!</p>

                <p className="mt-2">Keep in mind that according to the spec, when using the Implicit Flow, the authorization server should not issue refresh tokens. The Implicit flow is often implemented in Single-Page Applications (SPAs), which run on the frontend layer of a system architecture. There's no easy way of keeping a refresh token secure in the frontend layer on its own.</p>

                <p className="mt-2">Using the Authorization Code Flow with Proof Key for Code Exchange (PKCE) mitigates many risks inherent to the Implicit Flow. For example, when using the implicit grant type, the access token is transmitted in the URI fragment, which can expose it to unauthorized parties. You can learn more about these vulnerabilities by reading the "Misuse of Access Token to Impersonate Resource Owner in Implicit Flow" section of the spec.</p>

                <p className="mt-2">However, implementing PKCE in your applications still has no impact on how secure refresh tokens are.</p>


                <p className="mt-8 text-sm text-right">Happy Coding ....</p>
            </div>
        </div>
    );
};

export default AccessToken;