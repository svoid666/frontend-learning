const copyright = document.querySelector('.copyright')
async function getpoeam() {
    const response = await fetch('https://v1.jinrishici.com/all.json')
    if (!response.ok) {
        throw new Error('获取失败');
    }
    let result
    try {
        result = await response.json()
    } catch (error) {
        throw new Error('数据解析失败')
    }
    return result
}
async function get() {
    try {
        const data = await getpoeam()
        copyright.innerHTML = data.content
    } catch (error) {
        console.log(error.message)
    }
}
get()
