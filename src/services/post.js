
import axiosConfig from '../axiosConfig'

export const apiGetPosts = () =>new Promise(async(resolve, reject)=> {
    try {
        const respone = await axiosConfig({
            method: 'get',
            url: '/api/v1/post/all',
        })
        resolve(respone)
    } catch (error) {
        reject(error)
    }
})

export const apiGetPostsLimit = (page) =>new Promise(async(resolve, reject)=> {
    try {
        const respone = await axiosConfig({
            method: 'get',
            url: `/api/v1/post/limit?page=${page}`,
        })
        resolve(respone)
    } catch (error) {
        reject(error)
    }
})