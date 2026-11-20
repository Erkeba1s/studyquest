import type { Question } from './types'

export const questions: Question[] = [
  {
    id: "F1",
    sourceId: "F1",
    text: "A program achieves a speedup of 8 on 10 processors. Using efficiency = speedup / processor count, what is its parallel efficiency?",
    options: [
      {
        id: "A",
        text: "80%"
      }
    ],
    correctId: "A",
    explanation: "The correct answer is A: 80%. This choice matches the key concept described in the question.",
    subject: "Memory and parallel design"
  },
  {
    id: "F2",
    sourceId: "F2",
    text: "Two implementations solve the same problem. Version A uses 4 processors for 50 seconds; version B uses 8 processors for 30 seconds. Which comparison of elapsed time and total processor-seconds is correct?",
    options: [
      {
        id: "A",
        text: "B has lower elapsed time but uses more processor-seconds"
      }
    ],
    correctId: "A",
    explanation: "The correct answer is A: B has lower elapsed time but uses more processor-seconds. This choice matches the key concept described in the question.",
    subject: "High Performance Computing"
  },
  {
    id: "F3",
    sourceId: "F3",
    text: "A simulation updates 2 million cells, performs 50 floating-point operations per cell per step, and runs for 100 steps. How many floating-point operations are performed in total?",
    options: [
      {
        id: "A",
        text: "10 billion"
      }
    ],
    correctId: "A",
    explanation: "The correct answer is A: 10 billion. This choice matches the key concept described in the question.",
    subject: "High Performance Computing"
  },
  {
    id: "F4",
    sourceId: "F4",
    text: "Two cluster nodes each have 32 GB of private memory. A 48 GB data set can be divided evenly between them. Which statement correctly describes this distributed-memory arrangement?",
    options: [
      {
        id: "B",
        text: "Each node can hold a 24 GB partition, with remote data exchanged explicitly"
      }
    ],
    correctId: "B",
    explanation: "The correct answer is B: Each node can hold a 24 GB partition, with remote data exchanged explicitly. This choice matches the key concept described in the question.",
    subject: "Memory and parallel design"
  },
  {
    id: "F5",
    sourceId: "F5",
    text: "A job spends 12 seconds in a serial phase and 88 seconds in a phase that divides perfectly over 4 processors. Ignoring overhead, what is the total parallel runtime?",
    options: [
      {
        id: "E",
        text: "34 seconds"
      }
    ],
    correctId: "E",
    explanation: "The correct answer is E: 34 seconds. This choice matches the key concept described in the question.",
    subject: "Memory and parallel design"
  },
  {
    id: "F6",
    sourceId: "F6",
    text: "Four workers begin together and take 8, 8, 8, and 20 seconds to finish their assigned work. A final barrier has negligible overhead. How long does this parallel phase take?",
    options: [
      {
        id: "B",
        text: "20 seconds"
      }
    ],
    correctId: "B",
    explanation: "The correct answer is B: 20 seconds. This choice matches the key concept described in the question.",
    subject: "Memory and parallel design"
  },
  {
    id: "F7",
    sourceId: "F7",
    text: "A cache line holds 64 bytes. A contiguous array stores 8-byte elements, and a[0] begins at a cache-line boundary. How many array elements fit in the first cache line?",
    options: [
      {
        id: "D",
        text: "8"
      }
    ],
    correctId: "D",
    explanation: "The correct answer is D: 8. This choice matches the key concept described in the question.",
    subject: "Memory and parallel design"
  },
  {
    id: "F8",
    sourceId: "F8",
    text: "A program repeatedly scans a working set much larger than cache capacity. Why might many accesses still miss after the first complete scan?",
    options: [
      {
        id: "D",
        text: "Earlier cache lines may be evicted before the next scan reuses them"
      }
    ],
    correctId: "D",
    explanation: "The correct answer is D: Earlier cache lines may be evicted before the next scan reuses them. This choice matches the key concept described in the question.",
    subject: "Memory and parallel design"
  },
  {
    id: "F9",
    sourceId: "F9",
    text: "A parallel-program designer has already formed tasks and identified their communication. The designer now decides which processor will execute each task. Which design step is this?",
    options: [
      {
        id: "E",
        text: "Mapping"
      }
    ],
    correctId: "E",
    explanation: "The correct answer is E: Mapping. This choice matches the key concept described in the question.",
    subject: "Memory and parallel design"
  },
  {
    id: "F10",
    sourceId: "F10",
    text: "A program assigns separate image regions to workers, each applying the same filter to its region. What kind of decomposition is used?",
    options: [
      {
        id: "E",
        text: "Domain decomposition"
      }
    ],
    correctId: "E",
    explanation: "The correct answer is E: Domain decomposition. This choice matches the key concept described in the question.",
    subject: "Memory and parallel design"
  },
  {
    id: "F11",
    sourceId: "F11",
    text: "Two tasks repeatedly exchange a large intermediate buffer. Several processor assignments are otherwise equally balanced. Which mapping most directly aims to reduce communication cost?",
    options: [
      {
        id: "D",
        text: "Place the communicating tasks close to each other in the hardware topology"
      }
    ],
    correctId: "D",
    explanation: "The correct answer is D: Place the communicating tasks close to each other in the hardware topology. This choice matches the key concept described in the question.",
    subject: "High Performance Computing"
  },
  {
    id: "F12",
    sourceId: "F12",
    text: "A grid update uses each cell and its immediate neighbors. Two workers own adjacent regions. What data typically needs to be exchanged between updates?",
    options: [
      {
        id: "E",
        text: "Boundary values needed by the neighboring region MPI"
      }
    ],
    correctId: "E",
    explanation: "The correct answer is E: Boundary values needed by the neighboring region MPI. This choice matches the key concept described in the question.",
    subject: "High Performance Computing"
  },
  {
    id: "F13",
    sourceId: "F13",
    text: "Rank 0 has a parameter value that every rank needs. All ranks call the same collective with root 0. Which operation distributes that value without combining it with other values?",
    options: [
      {
        id: "D",
        text: "MPI_Bcast"
      }
    ],
    correctId: "D",
    explanation: "The correct answer is D: MPI_Bcast. This choice matches the key concept described in the question.",
    subject: "High Performance Computing"
  },
  {
    id: "F14",
    sourceId: "F14",
    text: "Ranks 0, 1, and 2 each send the two integers [rank, rank+10] to MPI_Gather at root 0. What is the order of the six integers in the root’s receive buffer?",
    options: [
      {
        id: "E",
        text: "[0,10,1,11,2,12]"
      }
    ],
    correctId: "E",
    explanation: "The correct answer is E: [0,10,1,11,2,12]. This choice matches the key concept described in the question.",
    subject: "Memory and parallel design"
  },
  {
    id: "F15",
    sourceId: "F15",
    text: "Rank 0 sends one message to rank 1 with tag 7 in MPI_COMM_WORLD. Which receive at rank 1 explicitly matches its source, tag, and communicator?",
    options: [
      {
        id: "D",
        text: "Source 0, tag 7, MPI_COMM_WORLD"
      }
    ],
    correctId: "D",
    explanation: "The correct answer is D: Source 0, tag 7, MPI_COMM_WORLD. This choice matches the key concept described in the question.",
    subject: "Memory and parallel design"
  },
  {
    id: "F16",
    sourceId: "F16",
    text: "A process starts MPI_Isend using buffer buf and then performs unrelated computation. When is it safe to overwrite buf for a new purpose?",
    options: [
      {
        id: "D",
        text: "After completion of that send has been confirmed, for example by MPI_Wait"
      }
    ],
    correctId: "D",
    explanation: "The correct answer is D: After completion of that send has been confirmed, for example by MPI_Wait. This choice matches the key concept described in the question.",
    subject: "Memory and parallel design"
  },
  {
    id: "F17",
    sourceId: "F17",
    text: "Two ranks each issue a blocking send to the other before posting their receive. The program must work even when MPI cannot buffer the messages. Which change directly avoids relying on that buffering?",
    options: [
      {
        id: "D",
        text: "Use MPI_Sendrecv to perform the paired send and receive"
      }
    ],
    correctId: "D",
    explanation: "The correct answer is D: Use MPI_Sendrecv to perform the paired send and receive. This choice matches the key concept described in the question.",
    subject: "Memory and parallel design"
  },
  {
    id: "F18",
    sourceId: "F18",
    text: "Two ranks have different private values of x and then call MPI_Barrier. No data-transfer operation is performed. What does the barrier guarantee?",
    options: [
      {
        id: "C",
        text: "Neither rank completes the barrier before both have entered it"
      }
    ],
    correctId: "C",
    explanation: "The correct answer is C: Neither rank completes the barrier before both have entered it. This choice matches the key concept described in the question.",
    subject: "Memory and parallel design"
  },
  {
    id: "F19",
    sourceId: "F19",
    text: "An array is shared by threads on one node. A loop updates each element independently exactly once. Which construct directly divides those iterations across a newly created team?",
    options: [
      {
        id: "C",
        text: "#pragma omp parallel for"
      }
    ],
    correctId: "C",
    explanation: "The correct answer is C: #pragma omp parallel for. This choice matches the key concept described in the question.",
    subject: "PGAS and UPC"
  },
  {
    id: "F20",
    sourceId: "F20",
    text: "A variable t is declared outside an OpenMP parallel loop. Each iteration assigns t = a[i] * 2 and then uses t to write b[i]. Different iterations write different b elements. Which clause avoids races on t without serializing the loop?",
    options: [
      {
        id: "B",
        text: "private(t)"
      }
    ],
    correctId: "B",
    explanation: "The correct answer is B: private(t). This choice matches the key concept described in the question.",
    subject: "Memory and parallel design"
  },
  {
    id: "F21",
    sourceId: "F21",
    text: "Assume valid OpenMP execution. What is sum after this code? int sum = 0; #pragma omp parallel for reduction(+:sum) for (int i = 1; i <= 5; ++i) sum += 2*i;",
    options: [
      {
        id: "B",
        text: "30"
      }
    ],
    correctId: "B",
    explanation: "The correct answer is B: 30. This choice matches the key concept described in the question.",
    subject: "Memory and parallel design"
  },
  {
    id: "F22",
    sourceId: "F22",
    text: "Threads increment one shared integer counter. The update is only counter++. Which OpenMP construct can directly make this individual update atomic?",
    options: [
      {
        id: "B",
        text: "An atomic directive immediately before counter++"
      }
    ],
    correctId: "B",
    explanation: "The correct answer is B: An atomic directive immediately before counter++. This choice matches the key concept described in the question.",
    subject: "PGAS and UPC"
  },
  {
    id: "F23",
    sourceId: "F23",
    text: "An OpenMP loop has iterations 0 through 11, three threads, and schedule(static,2). Which iterations are assigned to thread 2?",
    options: [
      {
        id: "E",
        text: "4, 5, 10, 11"
      }
    ],
    correctId: "E",
    explanation: "The correct answer is E: 4, 5, 10, 11. This choice matches the key concept described in the question.",
    subject: "Memory and parallel design"
  },
  {
    id: "F24",
    sourceId: "F24",
    text: "A hybrid job runs 2 MPI processes on each of 3 nodes. Each process creates 4 OpenMP threads, including its primary thread. During those parallel regions, how many MPI processes and OpenMP threads are there in total?",
    options: [
      {
        id: "D",
        text: "6 processes and 24 threads"
      }
    ],
    correctId: "D",
    explanation: "The correct answer is D: 6 processes and 24 threads. This choice matches the key concept described in the question.",
    subject: "Memory and parallel design"
  },
  {
    id: "F25",
    sourceId: "F25",
    text: "Mappers emit (’x’,4), (’y’,2), (’x’,6), and (’y’,5). A reducer sums values for each key. What is the output, ignoring order?",
    options: [
      {
        id: "B",
        text: "(’x’,10) and (’y’,7)"
      }
    ],
    correctId: "B",
    explanation: "The correct answer is B: (’x’,10) and (’y’,7). This choice matches the key concept described in the question.",
    subject: "MapReduce and distributed storage"
  },
  {
    id: "F26",
    sourceId: "F26",
    text: "Two mappers produce records with the same intermediate key. What must the shuffle and grouping stage ensure for ordinary per-key reduction?",
    options: [
      {
        id: "E",
        text: "Those records are assigned to the same reduce group"
      }
    ],
    correctId: "E",
    explanation: "The correct answer is E: Those records are assigned to the same reduce group. This choice matches the key concept described in the question.",
    subject: "MapReduce and distributed storage"
  },
  {
    id: "F27",
    sourceId: "F27",
    text: "A MapReduce job uses a combiner for local aggregation. Which correctness assumption should the job make?",
    options: [
      {
        id: "A",
        text: "The final answer must remain correct even if the combiner is not executed"
      }
    ],
    correctId: "A",
    explanation: "The correct answer is A: The final answer must remain correct even if the combiner is not executed. This choice matches the key concept described in the question.",
    subject: "MapReduce and distributed storage"
  },
  {
    id: "F28",
    sourceId: "F28",
    text: "For an inverted index, a reducer receives word ’parallel’ with document IDs [D1,D1,D3]. If the index should list each containing document once, what should this reducer output?",
    options: [
      {
        id: "B",
        text: "’parallel’ mapped to {D1,D3}"
      }
    ],
    correctId: "B",
    explanation: "The correct answer is B: ’parallel’ mapped to {D1,D3}. This choice matches the key concept described in the question.",
    subject: "MapReduce and distributed storage"
  },
  {
    id: "F29",
    sourceId: "F29",
    text: "An HDFS client has a file path but needs to know which machines store its blocks. Which component normally provides this metadata?",
    options: [
      {
        id: "E",
        text: "The NameNode"
      }
    ],
    correctId: "E",
    explanation: "The correct answer is E: The NameNode. This choice matches the key concept described in the question.",
    subject: "MapReduce and distributed storage"
  },
  {
    id: "F30",
    sourceId: "F30",
    text: "An HDFS client has obtained the locations of a file’s blocks. Which statement describes the usual data-read path?",
    options: [
      {
        id: "E",
        text: "The client reads block bytes from the relevant DataNodes GPU and CUDA"
      }
    ],
    correctId: "E",
    explanation: "The correct answer is E: The client reads block bytes from the relevant DataNodes GPU and CUDA. This choice matches the key concept described in the question.",
    subject: "MapReduce and distributed storage"
  },
  {
    id: "F31",
    sourceId: "F31",
    text: "A CUDA kernel is launched as update<<<6,96>>>(...). How many blocks and total threads are requested?",
    options: [
      {
        id: "C",
        text: "6 blocks and 576 threads"
      }
    ],
    correctId: "C",
    explanation: "The correct answer is C: 6 blocks and 576 threads. This choice matches the key concept described in the question.",
    subject: "GPU and CUDA"
  },
  {
    id: "F32",
    sourceId: "F32",
    text: "A launch uses 5 blocks of 128 threads for an array with 600 elements. The kernel accesses the array only when i < 600. How many launched threads skip the guarded array operation?",
    options: [
      {
        id: "D",
        text: "40"
      }
    ],
    correctId: "D",
    explanation: "The correct answer is D: 40. This choice matches the key concept described in the question.",
    subject: "GPU and CUDA"
  },
  {
    id: "F33",
    sourceId: "F33",
    text: "A grid-stride loop uses 3 blocks of 64 threads. A thread starts at i = 5 and advances by blockDim.x * gridDim.x. For an array length of 500, which indices does it process?",
    options: [
      {
        id: "C",
        text: "5, 197, 389"
      }
    ],
    correctId: "C",
    explanation: "The correct answer is C: 5, 197, 389. This choice matches the key concept described in the question.",
    subject: "High Performance Computing"
  },
  {
    id: "F34",
    sourceId: "F34",
    text: "In an explicit separate-memory CUDA program, a completed kernel has written a device output buffer. Which sequence lets the CPU use the values and then releases that device buffer?",
    options: [
      {
        id: "E",
        text: "Copy device output to a host buffer, then cudaFree the device buffer"
      }
    ],
    correctId: "E",
    explanation: "The correct answer is E: Copy device output to a host buffer, then cudaFree the device buffer. This choice matches the key concept described in the question.",
    subject: "GPU and CUDA"
  },
  {
    id: "F35",
    sourceId: "F35",
    text: "Each CUDA block cooperatively loads a tile reused only by threads in that block. Which memory space is designed for this block-level cooperation?",
    options: [
      {
        id: "C",
        text: "Shared memory"
      }
    ],
    correctId: "C",
    explanation: "The correct answer is C: Shared memory. This choice matches the key concept described in the question.",
    subject: "GPU and CUDA"
  },
  {
    id: "F36",
    sourceId: "F36",
    text: "After all threads in a block load their assigned shared-memory values, each thread reads values loaded by other threads. Where should a block barrier normally be placed?",
    options: [
      {
        id: "C",
        text: "Between the cooperative loads and the cross-thread reads"
      }
    ],
    correctId: "C",
    explanation: "The correct answer is C: Between the cooperative loads and the cross-thread reads. This choice matches the key concept described in the question.",
    subject: "PGAS and UPC"
  },
  {
    id: "F37",
    sourceId: "F37",
    text: "Every active thread in a warp evaluates a branch condition as true. What can be concluded about that branch?",
    options: [
      {
        id: "A",
        text: "It does not split that warp into different branch paths"
      }
    ],
    correctId: "A",
    explanation: "The correct answer is A: It does not split that warp into different branch paths. This choice matches the key concept described in the question.",
    subject: "GPU and CUDA"
  },
  {
    id: "F38",
    sourceId: "F38",
    text: "A 2D CUDA block is configured as dim3(12,8). How many threads are in the block?",
    options: [
      {
        id: "C",
        text: "96"
      }
    ],
    correctId: "C",
    explanation: "The correct answer is C: 96. This choice matches the key concept described in the question.",
    subject: "GPU and CUDA"
  },
  {
    id: "F39",
    sourceId: "F39",
    text: "A binary sum reduction starts with 32 partial values and halves their number each round. How many combining rounds are needed to obtain one value?",
    options: [
      {
        id: "A",
        text: "5"
      }
    ],
    correctId: "A",
    explanation: "The correct answer is A: 5. This choice matches the key concept described in the question.",
    subject: "High Performance Computing"
  },
  {
    id: "F40",
    sourceId: "F40",
    text: "The program defines r = sc.textFile(path), then s = r.filter(test), and finally n = s.count(). What normally causes the filter computation to execute?",
    options: [
      {
        id: "C",
        text: "The count action requesting its result"
      }
    ],
    correctId: "C",
    explanation: "The correct answer is C: The count action requesting its result. This choice matches the key concept described in the question.",
    subject: "High Performance Computing"
  },
  {
    id: "F41",
    sourceId: "F41",
    text: "An RDD contains [1,2,3,4]. It is filtered with x % 2 == 0 and then mapped with x + 3. What values result, ignoring partition layout?",
    options: [
      {
        id: "D",
        text: "[5,7]"
      }
    ],
    correctId: "D",
    explanation: "The correct answer is D: [5,7]. This choice matches the key concept described in the question.",
    subject: "Spark"
  },
  {
    id: "F42",
    sourceId: "F42",
    text: "A pair RDD contains (’p’,3), (’q’,5), (’p’,4), and (’q’,1). What does reduceByKey(addition) produce, ignoring output order?",
    options: [
      {
        id: "B",
        text: "(’p’,7) and (’q’,6)"
      }
    ],
    correctId: "B",
    explanation: "The correct answer is B: (’p’,7) and (’q’,6). This choice matches the key concept described in the question.",
    subject: "Spark"
  },
  {
    id: "F43",
    sourceId: "F43",
    text: "RDD A contains (’r’,2) and (’s’,8). RDD B contains (’r’,5) and (’t’,9). What does A.join(B) produce, ignoring output order?",
    options: [
      {
        id: "C",
        text: "(’r’,(2,5)) only"
      }
    ],
    correctId: "C",
    explanation: "The correct answer is C: (’r’,(2,5)) only. This choice matches the key concept described in the question.",
    subject: "Spark"
  },
  {
    id: "F44",
    sourceId: "F44",
    text: "A very large RDD should remain distributed, but the developer wants to inspect five records. Which action most directly limits the records returned to the driver?",
    options: [
      {
        id: "A",
        text: "take(5)"
      }
    ],
    correctId: "A",
    explanation: "The correct answer is A: take(5). This choice matches the key concept described in the question.",
    subject: "Spark"
  },
  {
    id: "F45",
    sourceId: "F45",
    text: "Which statement correctly distinguishes a Spark driver from executors in a cluster?",
    options: [
      {
        id: "D",
        text: "The driver coordinates work; executors run tasks on partitions"
      }
    ],
    correctId: "D",
    explanation: "The correct answer is D: The driver coordinates work; executors run tasks on partitions. This choice matches the key concept described in the question.",
    subject: "Spark"
  },
  {
    id: "F46",
    sourceId: "F46",
    text: "All Spark tasks need a small lookup table that they will only read. Which feature is intended to distribute this shared input efficiently?",
    options: [
      {
        id: "A",
        text: "A broadcast variable"
      }
    ],
    correctId: "A",
    explanation: "The correct answer is A: A broadcast variable. This choice matches the key concept described in the question.",
    subject: "Spark"
  },
  {
    id: "F47",
    sourceId: "F47",
    text: "A data set has named columns, and the application needs SQL-style filtering and aggregation. Which Spark component directly supports this structured-data use?",
    options: [
      {
        id: "E",
        text: "Spark SQL PGAS and UPC"
      }
    ],
    correctId: "E",
    explanation: "The correct answer is E: Spark SQL PGAS and UPC. This choice matches the key concept described in the question.",
    subject: "Spark"
  },
  {
    id: "F48",
    sourceId: "F48",
    text: "A UPC program can address shared data associated with another thread. Which conclusion is valid?",
    options: [
      {
        id: "E",
        text: "The data is globally addressable, but remote and local access costs may differ"
      }
    ],
    correctId: "E",
    explanation: "The correct answer is E: The data is globally addressable, but remote and local access costs may differ. This choice matches the key concept described in the question.",
    subject: "PGAS and UPC"
  },
  {
    id: "F49",
    sourceId: "F49",
    text: "In UPC, a private variable is declared outside a shared-memory data structure. Different threads assign different values to their own instances. Which statement is correct?",
    options: [
      {
        id: "A",
        text: "Each thread retains its own private instance"
      }
    ],
    correctId: "A",
    explanation: "The correct answer is A: Each thread retains its own private instance. This choice matches the key concept described in the question.",
    subject: "PGAS and UPC"
  },
  {
    id: "F50",
    sourceId: "F50",
    text: "With THREADS = 4 and shared [3] int a[24], which thread has affinity to a[14]?",
    options: [
      {
        id: "C",
        text: "Thread 0"
      }
    ],
    correctId: "C",
    explanation: "The correct answer is C: Thread 0. This choice matches the key concept described in the question.",
    subject: "PGAS and UPC"
  },
  {
    id: "F51",
    sourceId: "F51",
    text: "With THREADS = 3 and shared [2] int a[12], which indices have affinity to thread 1?",
    options: [
      {
        id: "B",
        text: "2, 3, 8, 9"
      }
    ],
    correctId: "B",
    explanation: "The correct answer is B: 2, 3, 8, 9. This choice matches the key concept described in the question.",
    subject: "PGAS and UPC"
  },
  {
    id: "F52",
    sourceId: "F52",
    text: "All UPC threads must participate in creating one shared allocation and receive a pointer to that same allocation. Which routine fits this requirement?",
    options: [
      {
        id: "C",
        text: "upc_all_alloc"
      }
    ],
    correctId: "C",
    explanation: "The correct answer is C: upc_all_alloc. This choice matches the key concept described in the question.",
    subject: "PGAS and UPC"
  },
  {
    id: "F53",
    sourceId: "F53",
    text: "A UPC thread needs to read a shared data block into a private work buffer, modify that buffer, and copy it back. Which transfer sequence matches these directions?",
    options: [
      {
        id: "A",
        text: "upc_memget, then upc_memput"
      }
    ],
    correctId: "A",
    explanation: "The correct answer is A: upc_memget, then upc_memput. This choice matches the key concept described in the question.",
    subject: "PGAS and UPC"
  },
  {
    id: "F54",
    sourceId: "F54",
    text: "A UPC lock protects an update to a shared counter. Which behavior is guaranteed when all updating threads use that same lock correctly?",
    options: [
      {
        id: "B",
        text: "The protected updates do not execute concurrently"
      }
    ],
    correctId: "B",
    explanation: "The correct answer is B: The protected updates do not execute concurrently. This choice matches the key concept described in the question.",
    subject: "PGAS and UPC"
  },
  {
    id: "F55",
    sourceId: "F55",
    text: "A graph application needs shortest-path distances between every pair of vertices, rather than from only one source. Which algorithm from the lecture directly addresses this task?",
    options: [
      {
        id: "B",
        text: "Floyd’s algorithm"
      }
    ],
    correctId: "B",
    explanation: "The correct answer is B: Floyd’s algorithm. This choice matches the key concept described in the question.",
    subject: "Basic parallel graph algorithms"
  },
  {
    id: "F56",
    sourceId: "F56",
    text: "A transitive-closure matrix marks vertex V as reachable from vertex U. What does this establish?",
    options: [
      {
        id: "A",
        text: "There is a path from U to V"
      }
    ],
    correctId: "A",
    explanation: "The correct answer is A: There is a path from U to V. This choice matches the key concept described in the question.",
    subject: "Basic parallel graph algorithms"
  },
  {
    id: "F57",
    sourceId: "F57",
    text: "For an unweighted undirected graph, its adjacency matrix has A[2][5] = 1. What must be true of A[5][2]?",
    options: [
      {
        id: "A",
        text: "It is also 1"
      }
    ],
    correctId: "A",
    explanation: "The correct answer is A: It is also 1. This choice matches the key concept described in the question.",
    subject: "Basic parallel graph algorithms"
  },
  {
    id: "F58",
    sourceId: "F58",
    text: "Three valid spanning trees of the same weighted graph have total edge weights 14, 11, and 16. Among these candidates, which is preferred by the minimum-spanning-tree objective?",
    options: [
      {
        id: "D",
        text: "The tree with total weight 11"
      }
    ],
    correctId: "D",
    explanation: "The correct answer is D: The tree with total weight 11. This choice matches the key concept described in the question.",
    subject: "Basic parallel graph algorithms"
  },
  {
    id: "F59",
    sourceId: "F59",
    text: "Two routes connect U to V. Route 1 has edge weights 4 and 5; route 2 has weights 2, 3, and 3. Which route has smaller total weight?",
    options: [
      {
        id: "B",
        text: "Route 2, with total weight 8"
      }
    ],
    correctId: "B",
    explanation: "The correct answer is B: Route 2, with total weight 8. This choice matches the key concept described in the question.",
    subject: "High Performance Computing"
  },
  {
    id: "F60",
    sourceId: "F60",
    text: "A weighted graph has nonnegative edge weights. The task is to find shortest-path distances from one chosen source to all reachable vertices. Which algorithm directly matches this task?",
    options: [
      {
        id: "C",
        text: "Dijkstra’s algorithm"
      }
    ],
    correctId: "C",
    explanation: "The correct answer is C: Dijkstra’s algorithm. This choice matches the key concept described in the question.",
    subject: "Basic parallel graph algorithms"
  },
  {
    id: "E1",
    sourceId: "E1",
    text: "In the heterogeneous CUDA model taught in the lecture, which work assignment is most typical?",
    options: [
      {
        id: "E",
        text: "The CPU manages execution and the GPU runs highly parallel kernels"
      }
    ],
    correctId: "E",
    explanation: "The correct answer is E: The CPU manages execution and the GPU runs highly parallel kernels. This choice matches the key concept described in the question.",
    subject: "GPU and CUDA"
  },
  {
    id: "E3",
    sourceId: "E3",
    text: "A 1D kernel uses i = blockIdx.x * blockDim.x + threadIdx.x. If blockIdx.x = 3, blockDim.x = 64, and threadIdx.x = 5, what is i?",
    options: [
      {
        id: "D",
        text: "197"
      }
    ],
    correctId: "D",
    explanation: "The correct answer is D: 197. This choice matches the key concept described in the question.",
    subject: "GPU and CUDA"
  },
  {
    id: "E5",
    sourceId: "E5",
    text: "One thread processes one element. For N = 1000 and 256 threads per block, how many blocks are needed to cover all elements?",
    options: [
      {
        id: "B",
        text: "4"
      }
    ],
    correctId: "B",
    explanation: "The correct answer is B: 4. This choice matches the key concept described in the question.",
    subject: "High Performance Computing"
  },
  {
    id: "E6",
    sourceId: "E6",
    text: "A launch creates 1024 threads for an array of 1000 elements. What is the main purpose of if (i < N) before accessing a[i]?",
    options: [
      {
        id: "B",
        text: "Prevent the extra threads from accessing elements outside the array"
      }
    ],
    correctId: "B",
    explanation: "The correct answer is B: Prevent the extra threads from accessing elements outside the array. This choice matches the key concept described in the question.",
    subject: "High Performance Computing"
  },
  {
    id: "E9",
    sourceId: "E9",
    text: "A kernel launches blocks numbered 0 through 7. Which execution-order assumption is safe?",
    options: [
      {
        id: "C",
        text: "The program must not rely on blocks completing in numerical order"
      }
    ],
    correctId: "C",
    explanation: "The correct answer is C: The program must not rely on blocks completing in numerical order. This choice matches the key concept described in the question.",
    subject: "GPU and CUDA"
  },
  {
    id: "E13",
    sourceId: "E13",
    text: "Which situation most directly causes branch divergence within a warp?",
    options: [
      {
        id: "C",
        text: "Some threads take one branch while other threads in the same warp take another"
      }
    ],
    correctId: "C",
    explanation: "The correct answer is C: Some threads take one branch while other threads in the same warp take another. This choice matches the key concept described in the question.",
    subject: "GPU and CUDA"
  },
  {
    id: "E16",
    sourceId: "E16",
    text: "Why can Spark be useful for an iterative algorithm that reuses the same data many times?",
    options: [
      {
        id: "E",
        text: "It can retain reusable data in memory between iterations"
      }
    ],
    correctId: "E",
    explanation: "The correct answer is E: It can retain reusable data in memory between iterations. This choice matches the key concept described in the question.",
    subject: "Spark"
  },
  {
    id: "E18",
    sourceId: "E18",
    text: "Which operation explicitly redistributes an RDD into a requested number of partitions?",
    options: [
      {
        id: "D",
        text: "repartition(n)"
      }
    ],
    correctId: "D",
    explanation: "The correct answer is D: repartition(n). This choice matches the key concept described in the question.",
    subject: "Spark"
  },
  {
    id: "E20",
    sourceId: "E20",
    text: "An RDD contains the strings ’red blue’ and ’green’. Which operation produces individual word records from splitting each string?",
    options: [
      {
        id: "A",
        text: "flatMap(lambda s: s.split())"
      }
    ],
    correctId: "A",
    explanation: "The correct answer is A: flatMap(lambda s: s.split()). This choice matches the key concept described in the question.",
    subject: "Spark"
  },
  {
    id: "E21",
    sourceId: "E21",
    text: "What does filter(lambda x: x > 3) produce from [1,4,2,5]?",
    options: [
      {
        id: "C",
        text: "The records 4 and 5"
      }
    ],
    correctId: "C",
    explanation: "The correct answer is C: The records 4 and 5. This choice matches the key concept described in the question.",
    subject: "High Performance Computing"
  },
  {
    id: "E27",
    sourceId: "E27",
    text: "Workers need to contribute numeric updates to a total that the driver can inspect. Which feature fits this role?",
    options: [
      {
        id: "D",
        text: "An accumulator"
      }
    ],
    correctId: "D",
    explanation: "The correct answer is D: An accumulator. This choice matches the key concept described in the question.",
    subject: "High Performance Computing"
  },
  {
    id: "E28",
    sourceId: "E28",
    text: "An accumulator starts at zero and is incremented inside a lazy transformation. No action has run. What value should be expected when the driver reads it at this point?",
    options: [
      {
        id: "A",
        text: "0"
      }
    ],
    correctId: "A",
    explanation: "The correct answer is A: 0. This choice matches the key concept described in the question.",
    subject: "Spark"
  },
  {
    id: "E29",
    sourceId: "E29",
    text: "Which Spark library is intended for SQL queries and structured DataFrames?",
    options: [
      {
        id: "C",
        text: "Spark SQL"
      }
    ],
    correctId: "C",
    explanation: "The correct answer is C: Spark SQL. This choice matches the key concept described in the question.",
    subject: "Spark"
  },
  {
    id: "E34",
    sourceId: "E34",
    text: "In the UPC declarations shared int x; and int y;, which statement is correct?",
    options: [
      {
        id: "E",
        text: "There is one shared x and a private y for each thread"
      }
    ],
    correctId: "E",
    explanation: "The correct answer is E: There is one shared x and a private y for each thread. This choice matches the key concept described in the question.",
    subject: "PGAS and UPC"
  },
  {
    id: "E36",
    sourceId: "E36",
    text: "Which statement about a UPC pointer-to-shared is correct?",
    options: [
      {
        id: "A",
        text: "It can reference shared objects with local or remote affinity"
      }
    ],
    correctId: "A",
    explanation: "The correct answer is A: It can reference shared objects with local or remote affinity. This choice matches the key concept described in the question.",
    subject: "PGAS and UPC"
  },
  {
    id: "E37",
    sourceId: "E37",
    text: "Which allocation routine is collective and returns a pointer to the same shared allocation to all participating threads?",
    options: [
      {
        id: "C",
        text: "upc_all_alloc"
      }
    ],
    correctId: "C",
    explanation: "The correct answer is C: upc_all_alloc. This choice matches the key concept described in the question.",
    subject: "PGAS and UPC"
  },
  {
    id: "E38",
    sourceId: "E38",
    text: "Which routine copies bytes from a private source buffer into shared destination memory?",
    options: [
      {
        id: "A",
        text: "upc_memput"
      }
    ],
    correctId: "A",
    explanation: "The correct answer is A: upc_memput. This choice matches the key concept described in the question.",
    subject: "Memory and parallel design"
  },
  {
    id: "E39",
    sourceId: "E39",
    text: "What is the main role of the affinity expression in upc_forall?",
    options: [
      {
        id: "E",
        text: "Determine which thread executes each independent iteration"
      }
    ],
    correctId: "E",
    explanation: "The correct answer is E: Determine which thread executes each independent iteration. This choice matches the key concept described in the question.",
    subject: "PGAS and UPC"
  },
  {
    id: "E41",
    sourceId: "E41",
    text: "Which description defines a tree in the undirected setting?",
    options: [
      {
        id: "A",
        text: "A connected graph with no cycles"
      }
    ],
    correctId: "A",
    explanation: "The correct answer is A: A connected graph with no cycles. This choice matches the key concept described in the question.",
    subject: "High Performance Computing"
  },
  {
    id: "E45",
    sourceId: "E45",
    text: "What does a minimum spanning tree minimize?",
    options: [
      {
        id: "C",
        text: "The sum of the weights of its selected edges"
      }
    ],
    correctId: "C",
    explanation: "The correct answer is C: The sum of the weights of its selected edges. This choice matches the key concept described in the question.",
    subject: "Basic parallel graph algorithms"
  },
  {
    id: "E47",
    sourceId: "E47",
    text: "What problem does Dijkstra’s algorithm address for graphs with nonnegative edge weights?",
    options: [
      {
        id: "A",
        text: "Shortest paths from one source to other vertices"
      }
    ],
    correctId: "A",
    explanation: "The correct answer is A: Shortest paths from one source to other vertices. This choice matches the key concept described in the question.",
    subject: "Basic parallel graph algorithms"
  },
  {
    id: "E48",
    sourceId: "E48",
    text: "Two available routes from S to T have edge weights (2,3) and (1,6). Which route has the smaller total weight?",
    options: [
      {
        id: "C",
        text: "The route with weights 2 and 3"
      }
    ],
    correctId: "C",
    explanation: "The correct answer is C: The route with weights 2 and 3. This choice matches the key concept described in the question.",
    subject: "High Performance Computing"
  },
  {
    id: "E49",
    sourceId: "E49",
    text: "How does the all-pairs shortest-path problem differ from single-source shortest paths?",
    options: [
      {
        id: "B",
        text: "It asks for shortest paths between every pair of vertices"
      }
    ],
    correctId: "B",
    explanation: "The correct answer is B: It asks for shortest paths between every pair of vertices. This choice matches the key concept described in the question.",
    subject: "Basic parallel graph algorithms"
  },
  {
    id: "E50",
    sourceId: "E50",
    text: "Once the next vertex has been selected and announced, which work can different processors do in parallel in the lecture’s formulation?",
    options: [
      {
        id: "B",
        text: "Update their own assigned portions of the distance or key array"
      }
    ],
    correctId: "B",
    explanation: "The correct answer is B: Update their own assigned portions of the distance or key array. This choice matches the key concept described in the question.",
    subject: "Basic parallel graph algorithms"
  },
  {
    id: "M5",
    sourceId: "M5",
    text: "A simulation has 5 x 10^8 cells, performs 200 floating-point operations per cell per step, and runs for 10^4 steps. How many operations are required?",
    options: [
      {
        id: "A",
        text: "10^15"
      }
    ],
    correctId: "A",
    explanation: "The correct answer is A: 10^15. This choice matches the key concept described in the question.",
    subject: "High Performance Computing"
  },
  {
    id: "M9",
    sourceId: "M9",
    text: "The best sequential version takes 120 seconds and a parallel version on 8 processors takes 20 seconds. What is the speedup?",
    options: [
      {
        id: "D",
        text: "6"
      }
    ],
    correctId: "D",
    explanation: "The correct answer is D: 6. This choice matches the key concept described in the question.",
    subject: "Memory and parallel design"
  },
  {
    id: "M10",
    sourceId: "M10",
    text: "Why can a parallel version run more slowly than a sequential version on a small input?",
    options: [
      {
        id: "E",
        text: "Communication and synchronization overhead can exceed the computation saved Memory and parallel design"
      }
    ],
    correctId: "E",
    explanation: "The correct answer is E: Communication and synchronization overhead can exceed the computation saved Memory and parallel design. This choice matches the key concept described in the question.",
    subject: "Memory and parallel design"
  },
  {
    id: "M11",
    sourceId: "M11",
    text: "A loop repeatedly accesses a small data set that remains in cache after its first pass. Why are later passes likely to spend less time waiting for data?",
    options: [
      {
        id: "B",
        text: "More accesses can be served from cache instead of lower memory levels"
      }
    ],
    correctId: "B",
    explanation: "The correct answer is B: More accesses can be served from cache instead of lower memory levels. This choice matches the key concept described in the question.",
    subject: "Memory and parallel design"
  },
  {
    id: "M14",
    sourceId: "M14",
    text: "A program reads a[0], a[1], a[2], and a[3] consecutively. Which feature most directly helps this access pattern?",
    options: [
      {
        id: "E",
        text: "A cache line containing neighboring array elements HPC and Big Data                                                                  Practice questions"
      }
    ],
    correctId: "E",
    explanation: "The correct answer is E: A cache line containing neighboring array elements HPC and Big Data                                                                  Practice questions. This choice matches the key concept described in the question.",
    subject: "High Performance Computing"
  },
  {
    id: "M18",
    sourceId: "M18",
    text: "A simulation divides its spatial grid into regions and applies the same update to each region. Which approach is this?",
    options: [
      {
        id: "D",
        text: "Domain decomposition"
      }
    ],
    correctId: "D",
    explanation: "The correct answer is D: Domain decomposition. This choice matches the key concept described in the question.",
    subject: "High Performance Computing"
  },
  {
    id: "M21",
    sourceId: "M21",
    text: "Each process has one local maximum, and every process needs the global maximum. Which single collective is most appropriate?",
    options: [
      {
        id: "A",
        text: "MPI_Allreduce with MPI_MAX"
      }
    ],
    correctId: "A",
    explanation: "The correct answer is A: MPI_Allreduce with MPI_MAX. This choice matches the key concept described in the question.",
    subject: "High Performance Computing"
  },
  {
    id: "M23",
    sourceId: "M23",
    text: "A process belongs to two different communicators. Which statement is correct?",
    options: [
      {
        id: "C",
        text: "It may have different ranks in the two communicators"
      }
    ],
    correctId: "C",
    explanation: "The correct answer is C: It may have different ranks in the two communicators. This choice matches the key concept described in the question.",
    subject: "High Performance Computing"
  },
  {
    id: "M39",
    sourceId: "M39",
    text: "Assume valid OpenMP execution. What is sum after this code? int sum = 0; #pragma omp parallel for reduction(+:sum) for (int i = 1; i <= 4; ++i) sum += i;",
    options: [
      {
        id: "D",
        text: "10"
      }
    ],
    correctId: "D",
    explanation: "The correct answer is D: 10. This choice matches the key concept described in the question.",
    subject: "Memory and parallel design"
  },
  {
    id: "M40",
    sourceId: "M40",
    text: "A cluster application uses MPI between nodes and OpenMP within each process. What is one potential advantage over keeping many separate copies in MPI processes on a node?",
    options: [
      {
        id: "A",
        text: "Threads can share suitable data and reduce replication within each process"
      }
    ],
    correctId: "A",
    explanation: "The correct answer is A: Threads can share suitable data and reduce replication within each process. This choice matches the key concept described in the question.",
    subject: "Memory and parallel design"
  },
  {
    id: "M41",
    sourceId: "M41",
    text: "Which task is directly suited to a single basic MapReduce job?",
    options: [
      {
        id: "A",
        text: "Compute total sales per product from many independent transaction records"
      }
    ],
    correctId: "A",
    explanation: "The correct answer is A: Compute total sales per product from many independent transaction records. This choice matches the key concept described in the question.",
    subject: "MapReduce and distributed storage"
  },
  {
    id: "M42",
    sourceId: "M42",
    text: "Two mappers emit (apple,2) and (apple,3). What grouped input should the sum reducer receive for apple?",
    options: [
      {
        id: "B",
        text: "Key apple with values [2,3]"
      }
    ],
    correctId: "B",
    explanation: "The correct answer is B: Key apple with values [2,3]. This choice matches the key concept described in the question.",
    subject: "MapReduce and distributed storage"
  },
  {
    id: "M47",
    sourceId: "M47",
    text: "What is the primary purpose of a combiner in a word-count job?",
    options: [
      {
        id: "E",
        text: "Aggregate local counts to reduce intermediate network traffic HPC and Big Data                                                               Practice questions"
      }
    ],
    correctId: "E",
    explanation: "The correct answer is E: Aggregate local counts to reduce intermediate network traffic HPC and Big Data                                                               Practice questions. This choice matches the key concept described in the question.",
    subject: "High Performance Computing"
  },
  {
    id: "M50",
    sourceId: "M50",
    text: "After obtaining block locations, where does an HDFS client normally get the actual file-block bytes?",
    options: [
      {
        id: "A",
        text: "Directly from the relevant DataNodes"
      }
    ],
    correctId: "A",
    explanation: "The correct answer is A: Directly from the relevant DataNodes. This choice matches the key concept described in the question.",
    subject: "MapReduce and distributed storage"
  }
]
