const router = express.Router();

// Get all students
router.get('/students', async (req, res) => {
  try {
    const students = await Student.find(); // Replace Student with your student model
    res.json(students);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching students' });
  }
});

// Get a specific student by ID
router.get('/students/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id); // Replace Student with your student model
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching student' });
  }
});

// Create a new student
router.post('/students', async (req, res) => {
  try {
    const newStudent = new Student(req.body); // Replace Student with your student model
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Error creating student' });
  }
});

// Update a student (modify this based on your requirements)
router.put('/students/:id', async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Replace Student with your student model
    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(updatedStudent);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating student' });
  }
});

// Delete a student
router.delete('/students/:id', async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id); // Replace Student with your student model
    if (!deletedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json({ message: 'Student deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting student' });
  }
});

// Mount the router on your Express app (assuming you have an app variable)
app.use('/api/students', router); // Adjust the path as needed
