const ADMIN_PREFIX = "/admin";

export default {
  HOME: "/",
  PRINT_REQUEST_CREATION: "/print-request",
  ADMIN: {
    ROOT: `${ADMIN_PREFIX}/`,
    LOGIN: `${ADMIN_PREFIX}/login`,
    PRINT_REQUEST_DETAILS: `${ADMIN_PREFIX}/print-request/:printRequestId`,
  },
};
