import { HttpInterceptorFn } from '@angular/common/http';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const apiReq = req.clone({ url: `https://3zgug3s5bg.execute-api.eu-west-1.amazonaws.com/dev${req.url}` });
  return next(apiReq);
};
