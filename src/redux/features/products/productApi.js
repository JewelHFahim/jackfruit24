import apiSlice from "../api/apiSlice";

const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    productList: builder.query({
      query: () => `/products`,
      providesTags: ["jack-friut"],
    }),

    getSingleProduct: builder.query({
      query: (id) => `/products/${id}`,
      providesTags: ["jack-friut"],
    }),

    postProduct: builder.mutation({
      query: (data) => ({
        url: `/products`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["jack-friut"],
    }),

    deleteProduct: builder.mutation({
      query(id) {
        return {
          url: `/product/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["jack-friut"],
    }),
  }),
});

export const {
  useProductListQuery,
  useGetSingleProductQuery
} = productApi;
export default productApi;
