import {Message} from "element-ui";
 export const messages = function (type, message) {
    Message({
        type: type,
        message: message
    });
};