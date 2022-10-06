const resolvedPromise = () =>
  new Promise((res, rej) => {
    setTimeout(res({ message: "delayed success!" }), 500)
  });

const rejectedPromise = () =>
  new Promise((res, rej) => {
    setTimeout(rej({ error: "delayed exception!" }), 500)
  });

resolvedPromise().then((message) => console.log(message));
rejectedPromise().catch((err) => console.log(err));