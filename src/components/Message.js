import "./Message.css";
import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

const Message = forwardRef(({ username, message }, ref) => {
  const isUser = username === message.username;

  return (
    <div ref={ref} className={`message ${isUser && "message__host"}`}>
      <Card className={isUser ? "message__hostCard" : "message__guestCard"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {!isUser && `${message.username || "Anonymous"}:`} {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
