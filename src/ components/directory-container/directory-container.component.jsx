import DirectoryItem from "../directory-item/directory-item.component";
import "./directory-container.styles.scss";

const DirectoryContainer = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => {
        return (
          <DirectoryItem key={category.id} category={category}></DirectoryItem>
        );
      })}
    </div>
  );
};

export default DirectoryContainer;
