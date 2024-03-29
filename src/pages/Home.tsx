import React, { useCallback, useEffect} from "react";
import {
  Categories,
  SortPopup,
  PizzaBlock,
  Skeleton,
  Pagination,
} from "../components";
import { useSelector } from "react-redux";
import { setCategoryId, setCurrentPage } from "../redux/filter/slice";
// import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/store";
import { selectPizzaData } from "../redux/pizza/selectors";
import { selectFilter } from "../redux/filter/selectors";
import { fetchPizzas } from "../redux/pizza/asyncActions";

const Home: React.FC = () => {
  // const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const isSearch = useRef(false);
  // const isMounted = useRef(false);

  const { categoryId, sort, currentPage, searchValue } =
    useSelector(selectFilter);
  const { items, status } = useSelector(selectPizzaData);

  const selectCategory = useCallback((i: number) => {
    dispatch(setCategoryId(i));
  }, []);

  const changePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const getPizzas = async () => {
    // fetch(
    //   `https://65d8fa36c96fbb24c1bc98c9.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    // )
    //   .then((res) => res.json())
    //   .then((json) => {
    //     setItems(json);
    //     setIsLoading(false);
    //   });
    const category = categoryId > 0 ? `category=${categoryId}&` : ``;
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = sort.sortProperty.replace("-", "");
    const search = searchValue ? `${searchValue}` : "";

    dispatch(
      fetchPizzas({
        category,
        order,
        sortBy,
        search,
        currentPage: String(currentPage),
      })
    );

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    // if (isMounted.current) {
    //   const queryString = QueryString.stringify({
    //     sortProperty: sort.sortProperty,
    //     categoryId,
    //     currentPage,
    //   });

    //   navigate(`/?${queryString}`);
    // }
    // isMounted.current = true;
    getPizzas();
  }, [categoryId, sort.sortProperty, currentPage]);

  // useEffect(() => {
  //   if (window.location.search) {
  //     const params = QueryString.parse(
  //       window.location.search.substring(1)
  //     ) as unknown as SearchPizzaParams;
  //     const sort = sortList.find((obj) => obj.sortProperty === params.sortBy);

  //     dispatch(
  //       setFilters({
  //         searchValue: params.search,
  //         categoryId: Number(params.category),
  //         currentPage: Number(params.currentPage),
  //         sort: sort || sortList[0],
  //       })
  //     );
  //     isMounted.current = true;
  //   }
  // }, []);

  // useEffect(() => {
  //   window.scrollTo(0, 0);

  //   if (!isSearch.current) {
  //     getPizzas();
  //   }

  //   isSearch.current = false;
  // }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const pizzas = items
    // .filter((obj) => {
    //   if (obj.title?.toLowerCase().includes(searchValue.toLowerCase())) {
    //     return true;
    //   }
    //   return false;
    // })
    .map((obj: any) => <PizzaBlock {...obj} key={obj.id} />);

  const skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} selectCategory={selectCategory} />
        <SortPopup value={sort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === "error" ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>
            К сожалению, не удалось получить питсы. Попробуйте повтоорить
            попытку позже.
          </p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : pizzas}
        </div>
      )}
      <Pagination changePage={changePage} currentPage={currentPage} />
    </div>
  );
};

export default Home;
