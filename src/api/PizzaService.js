import axios from 'axios'

export default {

    async GetMostUsersLiked() {
        const response =  await axios.get('user/UsersLike')
        return response
    },
}