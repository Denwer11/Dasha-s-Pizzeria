import { useWhyDidYouUpdate } from "ahooks";
import { memo } from "react";

type CategoriesProps = {
  value: number;
  selectCategory: (i: number) => void;
};

const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const Categories: React.FC<CategoriesProps> = memo(
  ({ value, selectCategory }) => {

    return (
      <div className="categories">
        <ul>
          {categories.map((categoryName, i) => (
            <li
              onClick={() => selectCategory(i)}
              className={value === i ? "active" : ""}
              key={i}
            >
              {categoryName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

export default Categories;
