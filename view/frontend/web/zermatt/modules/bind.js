/**
 * @author Hervé Guétin <www.linkedin.com/in/herveguetin>
 */
export default {
    query: '',
    init() {
        Alpine.bind(this.$el.querySelector('#search'), () => ({
            'x-model': 'query',
            '@input.debounce': () => this.onInputChange()
        }))
    },
    onInputChange() {
        console.log(this.query)
    }
}
