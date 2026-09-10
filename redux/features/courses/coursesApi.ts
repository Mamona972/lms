import { apiSlice } from "../api/apiSlice";

export const courseApi = apiSlice.injectEndpoints({
    endpoints:  (builder)=>({
        createCourse: builder.mutation({
            query:(data)=>({
                url:"create-course",
                method: "POST",
                body: data,
                credentials:"include" as const,
            })
        }),
         //get all courses
         getAllCourses: builder.query({
            query:()=>({
                url:"getCourses",
                method: "GET",
                credentials:"include" as const,
            })
        }),
        deleteCourses: builder.mutation({
            query:(id)=>({
                url:`delete-Course/${id}`,
                method: "DELETE",
                credentials:"include" as const,
            })
        }),
        editCourses: builder.mutation({
            query:({id,data})=>({
                url:`edit-course/${id}`,
                method: "PUT",
                body: data,
                credentials:"include" as const,
            })
        }),
    })
})

export const {useCreateCourseMutation, useGetAllCoursesQuery, useDeleteCoursesMutation, useEditCoursesMutation}=courseApi;