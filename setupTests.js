import "@testing-library/jest-dom";

//setupTests.js name must be same with the name in jest.config.js

// for connecting with react router
// util is built in node module
import { TextDecoder, TextEncoder } from "util";

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
