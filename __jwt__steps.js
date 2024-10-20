/**
 * Install Json Web Token
 * jwt.sign(payload,secret,{expireIn:})
 * token cliet site patai disi
 */
/**
 * How to store token in the Client Side
 * 1. memory--> ok type
 * 2. local storage--> ok type
 * 3. cookies: http only(keyal rakte hobe kono kon domain pataisi,save kortesi aisob keyal rakte hobe)
 */
/**
 * 1. set cookies with http only. for development secure :false,
 * 2. cors
 * app.use(cors({
  origin:['http://localhost:5173'],
  credentials: true
}));
 * 3. client side setting
 * In axios set with credentials: true
 */

/**
 * 1. to send cookies from the client make sure you added withcredentials true for the api call using axios
 * 2. use cookie parser as middleware
 */