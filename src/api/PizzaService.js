import Api from '@/services/Api'

export default {

    async GetMostUsersLiked() {
        const response = await Api().get('user/GetMostUsersLiked')
        return response
    },
}