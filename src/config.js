var Config = {
  DEBUG: false,
  LIB_VERSION: "0.0.1"
};
/*
 * Module-level globals
 */
var DEFAULT_CONFIG = {
  api_host: "http://localhost:8000",
  app_host: "http://localhost:8000",
  autotrack: true,
  cdn: "https://cdn.mxpnl.com",
  cross_subdomain_cookie: true,
  persistence: "cookie",
  persistence_name: "",
  cookie_name: "",
  loaded: function() {},
  store_google: true,
  save_referrer: true,
  test: false,
  verbose: false,
  img: false,
  track_pageview: true,
  debug: false,
  track_links_timeout: 300,
  cookie_expiration: 365,
  upgrade: false,
  disable_persistence: false,
  disable_cookie: false,
  secure_cookie: false,
  ip: true,
  opt_out_tracking_by_default: false,
  opt_out_persistence_by_default: false,
  opt_out_tracking_persistence_type: "localStorage",
  opt_out_tracking_cookie_prefix: null,
  property_blacklist: [],
  xhr_headers: {}, // { header: value, header2: value }
  inapp_protocol: "//",
  inapp_link_new_window: false
};

export { Config, DEFAULT_CONFIG };
