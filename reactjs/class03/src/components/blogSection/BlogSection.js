import { blogsData, cardContent, tags } from "../../constant/blogs";
import Card from "../card/Card";
import SideCard from "../sideCard/SideCard";
import TopicItem from "../topicItem/TopicItem";
import Button from "../button/Button";

export default function BlogSection() {
    let h2 = "Latest Blog Post";
    if (
        2 > 5
    ) {
        h2 = "Conidition true";
    }
    console.log("blogsData", blogsData);

    return (
        <div className="main">


            <div className="container">

                <div className="blog">

                    <h2 className="h2">{2 < 5 ? "New Blogs" : "Conditon false"}</h2>

                    <div className="blog-card-group">

                        {blogsData?.map((item, index) => {
                            return <Card key={index} data={item} />
                        })}



                    </div>

                  <Button title="Load More" />
                </div>


                <div className="aside">

                    <div className="topics">

                        <h2 className="h2">Topics</h2>

                        <TopicItem title="Database" />
                        <TopicItem title="Accessblity" />
                        <TopicItem title="Web Performance" />
                        <TopicItem title="Web Performance" />



                    </div>

                    <div className="tags">

                        <h2 className="h2">Tags</h2>

                        <div className="wrapper">

                            {tags?.map((item, index) => {
                                return (
                                    <button className="hashtag">{ item}</button>
                                )

                            })}


                        </div>

                    </div>
                 
                 {cardContent?.map((item, index) => {
                    return <SideCard key={index} data={item} />
                 })}

          

                </div>

            </div>

        </div>
    )
}
