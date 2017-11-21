/// <reference types="jest" />

type ResponseBody = any;
type Mock<T> = jest.Mock<Promise<T>>;

declare namespace fetch {
  function mockResponse(body: ResponseBody, init?: ResponseInit): Mock<Response>;
  function mockResponseOnce(body: ResponseBody, init?: ResponseInit): Mock<Response>;
  function mockResponses(responses: Array<{ body: ResponseBody, init?: ResponseInit }>): Array<Mock<Response>>;
  function mockReject(): Mock<never>;
  function mockRejectOnce(): Mock<never>;
  function resetMocks(): void;
}
