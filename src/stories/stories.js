import "./stories.css";

import story1img from "./media/1.jpg";
import story2img from "./media/2.jpg";
import story3img from "./media/3.jpg";
import story4img from "./media/4.jpg";
import story5img from "./media/5.jpg";

const stories = [
    {
        content: ({ action, isPaused }) => {
            return (
                <div>
                    <img src={story1img} width={"432px"} height={"768px"}></img>
                </div>
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                <div>
                    <img src={story2img} width={"432px"} height={"768px"}></img>
                </div>
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                <div>
                    <img src={story3img} width={"432px"} height={"768px"}></img>
                </div>
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                <div>
                    <img src={story4img} width={"432px"} height={"768px"}></img>
                </div>
            );
        },
    },
    {
        content: ({ action, isPaused }) => {
            return (
                <div>
                    <img src={story5img} width={"432px"} height={"768px"}></img>
                </div>
            );
        },
    },
];

export { stories };