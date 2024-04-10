import React from 'react'

//DS for storing N level nested comments
// comments: Comments[]

/* interface Comments{
    id: number;
    name: string;
    comment: string;
    replies: Comments[]
}*/

const commentsData = [
    {
        id: 1,
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
    {
        id: 2,
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
            {
                id: 3,
                name: "Akshay Saini",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [],
            },
            {
                id: 4,
                name: "Akshay Saini",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                    {
                        id: 5,
                        name: "Akshay Saini",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [
                            {
                                id: 6,
                                name: "Akshay Saini",
                                text: "Lorem ipsum dolor sit amet, consectetur adip",
                                replies: [
                                    {
                                        id: 7,
                                        name: "Akshay Saini",
                                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                                        replies: [
                                            {
                                                id: 8,
                                                name: "Akshay Saini",
                                                text: "Lorem ipsum dolor sit amet, consectetur adip",
                                                replies: [],
                                            },
                                        ],
                                    },
                                    {
                                        id: 9,
                                        name: "Akshay Saini",
                                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                                        replies: [],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 11,
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
    {
        id: 22,
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
    {
        id: 33,
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
    {
        id: 44,
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
];

// Job of comment JSX is to display one piece of comment(name and text). This is not bothered about nested commnets inside replies. 
// Cuz replies is itslef Comments[]. So the JSX element(CommentsList) that loops and shows each comment, will laso recurse for replies foe each comment 
const Comment = ({ data }) => {
    const { name, text } = data;
    return (
        <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
            <img
                className="w-12 h-12"
                alt="user"
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            />
            <div className="px-3">
                <p className="font-bold">{name}</p>
                <p>{text}</p>
            </div>
        </div>
    );
}

// CommentsList is responsible for showing comment and its replies in recursive manner
const CommentsList = ({ comments }) => {
    return comments.map(comment => (
        // this div represent a Comment and replies
        <div key={comment.id}>
            {/* show current level data ==> name and text */}
            <Comment data={comment} />
            {/* recurse for replies as it is itslef a list of comments */}
            <div className="ml-8 border border-l-black pl-5">
                <CommentsList comments={comment.replies} />
            </div>
        </div>
    ));
}


// Comment Section display heading and List of Comments.
const CommentSection = () => {
    return (
        <div className='m-5 p-2'>
            <h1 className="text-2xl font-bold">Comments: </h1>
            <CommentsList comments={commentsData} />
        </div>
    )
}

export default CommentSection