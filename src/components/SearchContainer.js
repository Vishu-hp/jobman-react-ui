import React, { useMemo, useState } from "react";
import Wrapper from "../assets/wrappers/SearchContainer";
import { useDispatch, useSelector } from "react-redux";
import FormRow from "./FormRow";
import FormRowSelect from "./FormRowSelect";
import { clearFilters, handleChange } from "../features/allJobs/allJobsSlice";

const SearchContainer = () => {
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs);

  const [localSearch, setLocalSearch] = useState(search);

  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  const debounce = () => {
    let timeoutID;
    return (e) => {
      console.log(timeoutID);
      setLocalSearch(e.target.value);
      clearInterval(timeoutID);
      timeoutID = setTimeout(() => {
        console.log(e.target.value);
        dispatch(handleChange({ name: e.target.name, value: e.target.value }));
      }, 1000);
    };
  };

  const optimizedDebounce = useMemo(() => debounce(), []);

  const handleSearch = (e) => {
    console.log(e.target.name, e.target.value);

    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalSearch("");
    dispatch(clearFilters());
  };

  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        <div className="form-center">
          <FormRow
            name="search"
            type="text"
            value={localSearch}
            handleChange={optimizedDebounce}
          />

          <FormRowSelect
            name="searchStatus"
            labelText="status"
            value={searchStatus}
            handleChange={handleSearch}
            list={["all", ...statusOptions]}
          />

          <FormRowSelect
            name="searchType"
            labelText="type"
            value={searchType}
            handleChange={handleSearch}
            list={["all", ...jobTypeOptions]}
          />

          <FormRowSelect
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />

          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filter
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
