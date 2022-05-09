# CRUD-reactjs
Viết ứng dụng CRUD bằng reactjs, sử dụng useState và useEffect

Các bước làm phần update:
	Bước 1: Khi click vào button Update, thì sẽ lấy được id của phần tử mà mình muốn Update
		+Trong file App.js, khởi tạo function handleUpdateStudent nhận parameter là id
		+Trong file Student.jsx, khởi tạo 1 props là onUpdate và khởi tạo 1 sự kiện onClick 
		cho button update tên handleUpdateData
		+Trong function handleUpdateData, sẽ gọi đến prop onUpdate và truyền id vào
	Bước 2: Hiển thị thông tin của đối tượng mà mình muốn update lên các ô input và thay button "Add new student"
	thành button "Update student"
		+Sau khi có id, thì sử dụng hàm find để lấy được phần tử có id tương ứng
		+Truyền phần tử đấy vào component ModalStudent dưới dạng props
	Bước 3: Khi click vào button "Update student" thì thông tin sẽ được update
		+Dùng splice
	
	syntax: useEffect(callback, dependencies);
	
	Chú thích: dependencies chỉ có thể là 1 trong 3 cái sau
		+Dependencies không có gì: thì mỗi lần component render lại thì sẽ chạy vào hàm useEffect
		useEffect(()=>{
			console.log("Có chạy vào trong useEffect")
		})
		+Dependencies là một mảng rỗng ( []): thì chỉ chạy đúng 1 lần
		useEffect(()=>{
			console.log("Có chạy vào trong useEffect")
			return
				console.log("Đây là componentWillUnmount")
		}, []) =>Đây là componentDidMount
		+Dependencies là một hoặc nhiều tham số
		useEffect(()=>{
			console.log("Có chạy vào trong useEffect")
		}, [variable])
		=>Khi variable thay đổi thì useEffect sẽ chạy
		
		useEffect(()=>{
			console.log("Có chạy vào trong useEffect")
		}, [variable1,variable2,variable3...])
		=>Khi 1 trong những dependencies thay đổi, thì useEffect sẽ chạy
		
Custom useEffect thành componentWillUnmount
	useEffect(()=>{
		console.log("Có chạy vào trong useEffect")
		return
			console.log("Đây là componentWillUnmount")
	}, [])

Custom useEffect thành componentDidUpdate
	useEffect(()=>{
		//thường sẽ có if else để kiểm tra sự thay đổi của props hoặc state
	}, [variable])
	
-Tìm hiểu trước về call api, đọc thêm về useEffect và tìm hiểu trước về react-router-dom v6
