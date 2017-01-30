module.exports = {
  // App properties templated out by wac-node-config-templater
  // App Settings
  TOKEN_SECRET: '${TOKEN_SECRET}',
  PORT: 80,

  // OAuth 2.0
  //TODO Make these parameters more generic. Just write out all params that exist at etcd path
  // Google
  GOOGLE_CLIENT_ID: '${GOOGLE_CLIENT_ID}',
  GOOGLE_REDIRECT_URI: '${GOOGLE_REDIRECT_URI}',
  GOOGLE_SECRET: '${GOOGLE_SECRET}'
};
