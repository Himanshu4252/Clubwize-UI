import Bookmarks from "@/app/Components/MyItems/Bookmarks";
import Message from "../Message/page";
const BookMarks = () => {
    return(
        <div className="flex h-screen">
        <div className="flex-3 bg-white h-screen rounded-lg">
          <Bookmarks />
        </div>
        <div className="flex-1 p-4">
          <Message />
        </div>
      </div>
      
       
    )
}
export default BookMarks;