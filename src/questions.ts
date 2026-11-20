import type { Question } from './types'

export const questions: Question[] = [
  {
    "id": "F1",
    "sourceId": "F1",
    "text": "A program achieves a speedup of 8 on 10 processors. Using efficiency = speedup / processor count, what is its parallel efficiency?",
    "options": [
      {
        "id": "A",
        "text": "80%"
      },
      {
        "id": "B",
        "text": "100%"
      },
      {
        "id": "C",
        "text": "125%"
      },
      {
        "id": "D",
        "text": "20%"
      },
      {
        "id": "E",
        "text": "8%"
      }
    ],
    "correctId": "A",
    "explanation": "The correct answer is A: 80%. This choice matches the key concept described in the question.",
    "subject": "Memory and parallel design"
  },
  {
    "id": "F2",
    "sourceId": "F2",
    "text": "Two implementations solve the same problem. Version A uses 4 processors for 50 seconds; version B uses 8 processors for 30 seconds. Which comparison of elapsed time and total processor-seconds is correct?",
    "options": [
      {
        "id": "A",
        "text": "B has lower elapsed time but uses more processor-seconds"
      },
      {
        "id": "B",
        "text": "B uses twice as many processor-seconds as A"
      },
      {
        "id": "C",
        "text": "Both use the same processor-seconds because the problem is unchanged"
      },
      {
        "id": "D",
        "text": "B has lower elapsed time and uses fewer processor-seconds"
      },
      {
        "id": "E",
        "text": "A has lower elapsed time but uses more processor-seconds"
      }
    ],
    "correctId": "A",
    "explanation": "The correct answer is A: B has lower elapsed time but uses more processor-seconds. This choice matches the key concept described in the question.",
    "subject": "High Performance Computing"
  },
  {
    "id": "F3",
    "sourceId": "F3",
    "text": "A simulation updates 2 million cells, performs 50 floating-point operations per cell per step, and runs for 100 steps. How many floating-point operations are performed in total?",
    "options": [
      {
        "id": "A",
        "text": "10 billion"
      },
      {
        "id": "B",
        "text": "5 billion"
      },
      {
        "id": "C",
        "text": "1 billion"
      },
      {
        "id": "D",
        "text": "100 million"
      },
      {
        "id": "E",
        "text": "100 billion"
      }
    ],
    "correctId": "A",
    "explanation": "The correct answer is A: 10 billion. This choice matches the key concept described in the question.",
    "subject": "High Performance Computing"
  },
  {
    "id": "F4",
    "sourceId": "F4",
    "text": "Two cluster nodes each have 32 GB of private memory. A 48 GB data set can be divided evenly between them. Which statement correctly describes this distributed-memory arrangement?",
    "options": [
      {
        "id": "A",
        "text": "Either node automatically sees one ordinary 64 GB shared address space"
      },
      {
        "id": "B",
        "text": "Each node can hold a 24 GB partition, with remote data exchanged explicitly"
      },
      {
        "id": "C",
        "text": "A barrier makes both private memories directly addressable as one array"
      },
      {
        "id": "D",
        "text": "Each node must reserve 48 GB even when it uses only its own partition"
      },
      {
        "id": "E",
        "text": "Both nodes must store all 48 GB before distributed processing can begin"
      }
    ],
    "correctId": "B",
    "explanation": "The correct answer is B: Each node can hold a 24 GB partition, with remote data exchanged explicitly. This choice matches the key concept described in the question.",
    "subject": "Memory and parallel design"
  },
  {
    "id": "F5",
    "sourceId": "F5",
    "text": "A job spends 12 seconds in a serial phase and 88 seconds in a phase that divides perfectly over 4 processors. Ignoring overhead, what is the total parallel runtime?",
    "options": [
      {
        "id": "A",
        "text": "22 seconds"
      },
      {
        "id": "B",
        "text": "100 seconds"
      },
      {
        "id": "C",
        "text": "25 seconds"
      },
      {
        "id": "D",
        "text": "40 seconds"
      },
      {
        "id": "E",
        "text": "34 seconds"
      }
    ],
    "correctId": "E",
    "explanation": "The correct answer is E: 34 seconds. This choice matches the key concept described in the question.",
    "subject": "Memory and parallel design"
  },
  {
    "id": "F6",
    "sourceId": "F6",
    "text": "Four workers begin together and take 8, 8, 8, and 20 seconds to finish their assigned work. A final barrier has negligible overhead. How long does this parallel phase take?",
    "options": [
      {
        "id": "A",
        "text": "8 seconds"
      },
      {
        "id": "B",
        "text": "20 seconds"
      },
      {
        "id": "C",
        "text": "44 seconds"
      },
      {
        "id": "D",
        "text": "11 seconds"
      },
      {
        "id": "E",
        "text": "12 seconds"
      }
    ],
    "correctId": "B",
    "explanation": "The correct answer is B: 20 seconds. This choice matches the key concept described in the question.",
    "subject": "Memory and parallel design"
  },
  {
    "id": "F7",
    "sourceId": "F7",
    "text": "A cache line holds 64 bytes. A contiguous array stores 8-byte elements, and a[0] begins at a cache-line boundary. How many array elements fit in the first cache line?",
    "options": [
      {
        "id": "A",
        "text": "64"
      },
      {
        "id": "B",
        "text": "512"
      },
      {
        "id": "C",
        "text": "4"
      },
      {
        "id": "D",
        "text": "8"
      },
      {
        "id": "E",
        "text": "16"
      }
    ],
    "correctId": "D",
    "explanation": "The correct answer is D: 8. This choice matches the key concept described in the question.",
    "subject": "Memory and parallel design"
  },
  {
    "id": "F8",
    "sourceId": "F8",
    "text": "A program repeatedly scans a working set much larger than cache capacity. Why might many accesses still miss after the first complete scan?",
    "options": [
      {
        "id": "A",
        "text": "Only writes can bring data into cache"
      },
      {
        "id": "B",
        "text": "The first scan permanently disables caching for those addresses"
      },
      {
        "id": "C",
        "text": "Each additional scan reduces physical cache capacity"
      },
      {
        "id": "D",
        "text": "Earlier cache lines may be evicted before the next scan reuses them"
      },
      {
        "id": "E",
        "text": "An address can produce at most one cache hit in a program"
      }
    ],
    "correctId": "D",
    "explanation": "The correct answer is D: Earlier cache lines may be evicted before the next scan reuses them. This choice matches the key concept described in the question.",
    "subject": "Memory and parallel design"
  },
  {
    "id": "F9",
    "sourceId": "F9",
    "text": "A parallel-program designer has already formed tasks and identified their communication. The designer now decides which processor will execute each task. Which design step is this?",
    "options": [
      {
        "id": "A",
        "text": "Communication identification"
      },
      {
        "id": "B",
        "text": "Reduction"
      },
      {
        "id": "C",
        "text": "Agglomeration"
      },
      {
        "id": "D",
        "text": "Partitioning"
      },
      {
        "id": "E",
        "text": "Mapping"
      }
    ],
    "correctId": "E",
    "explanation": "The correct answer is E: Mapping. This choice matches the key concept described in the question.",
    "subject": "Memory and parallel design"
  },
  {
    "id": "F10",
    "sourceId": "F10",
    "text": "A program assigns separate image regions to workers, each applying the same filter to its region. What kind of decomposition is used?",
    "options": [
      {
        "id": "A",
        "text": "A pipeline with one stage per worker"
      },
      {
        "id": "B",
        "text": "Replication of the entire calculation on every worker"
      },
      {
        "id": "C",
        "text": "A global reduction without partitioning"
      },
      {
        "id": "D",
        "text": "Functional decomposition into different processing stages"
      },
      {
        "id": "E",
        "text": "Domain decomposition"
      }
    ],
    "correctId": "E",
    "explanation": "The correct answer is E: Domain decomposition. This choice matches the key concept described in the question.",
    "subject": "Memory and parallel design"
  },
  {
    "id": "F11",
    "sourceId": "F11",
    "text": "Two tasks repeatedly exchange a large intermediate buffer. Several processor assignments are otherwise equally balanced. Which mapping most directly aims to reduce communication cost?",
    "options": [
      {
        "id": "A",
        "text": "Split each buffer transfer into as many small messages as possible"
      },
      {
        "id": "B",
        "text": "Move both tasks after every buffer exchange"
      },
      {
        "id": "C",
        "text": "Assign them using task-name order without considering communication"
      },
      {
        "id": "D",
        "text": "Place the communicating tasks close to each other in the hardware topology"
      },
      {
        "id": "E",
        "text": "Place them as far apart as possible regardless of the interconnect"
      }
    ],
    "correctId": "D",
    "explanation": "The correct answer is D: Place the communicating tasks close to each other in the hardware topology. This choice matches the key concept described in the question.",
    "subject": "High Performance Computing"
  },
  {
    "id": "F12",
    "sourceId": "F12",
    "text": "A grid update uses each cell and its immediate neighbors. Two workers own adjacent regions. What data typically needs to be exchanged between updates?",
    "options": [
      {
        "id": "A",
        "text": "Only the global number of cells"
      },
      {
        "id": "B",
        "text": "The complete program executable on every iteration"
      },
      {
        "id": "C",
        "text": "Every interior value even when no remote update uses it"
      },
      {
        "id": "D",
        "text": "Only each worker’s final output after all updates finish"
      },
      {
        "id": "E",
        "text": "Boundary values needed by the neighboring region"
      }
    ],
    "correctId": "E",
    "explanation": "The correct answer is E: Boundary values needed by the neighboring region. This choice matches the key concept described in the question.",
    "subject": "High Performance Computing"
  },
  {
    "id": "F13",
    "sourceId": "F13",
    "text": "Rank 0 has a parameter value that every rank needs. All ranks call the same collective with root 0. Which operation distributes that value without combining it with other values?",
    "options": [
      {
        "id": "A",
        "text": "MPI_Reduce with MPI_SUM"
      },
      {
        "id": "B",
        "text": "MPI_Barrier"
      },
      {
        "id": "C",
        "text": "MPI_Gather"
      },
      {
        "id": "D",
        "text": "MPI_Bcast"
      },
      {
        "id": "E",
        "text": "MPI_Scatter with different values for each rank"
      }
    ],
    "correctId": "D",
    "explanation": "The correct answer is D: MPI_Bcast. This choice matches the key concept described in the question.",
    "subject": "High Performance Computing"
  },
  {
    "id": "F14",
    "sourceId": "F14",
    "text": "Ranks 0, 1, and 2 each send the two integers [rank, rank+10] to MPI_Gather at root 0. What is the order of the six integers in the root’s receive buffer?",
    "options": [
      {
        "id": "A",
        "text": "[3,33,0,0,0,0]"
      },
      {
        "id": "B",
        "text": "[0,10,0,10,0,10]"
      },
      {
        "id": "C",
        "text": "[2,12,1,11,0,10]"
      },
      {
        "id": "D",
        "text": "[0,1,2,10,11,12]"
      },
      {
        "id": "E",
        "text": "[0,10,1,11,2,12]"
      }
    ],
    "correctId": "E",
    "explanation": "The correct answer is E: [0,10,1,11,2,12]. This choice matches the key concept described in the question.",
    "subject": "Memory and parallel design"
  },
  {
    "id": "F15",
    "sourceId": "F15",
    "text": "Rank 0 sends one message to rank 1 with tag 7 in MPI_COMM_WORLD. Which receive at rank 1 explicitly matches its source, tag, and communicator?",
    "options": [
      {
        "id": "A",
        "text": "Source 1, tag 7, MPI_COMM_WORLD"
      },
      {
        "id": "B",
        "text": "Source 0, tag 7, MPI_COMM_SELF"
      },
      {
        "id": "C",
        "text": "Source 0, tag 8, MPI_COMM_WORLD"
      },
      {
        "id": "D",
        "text": "Source 0, tag 7, MPI_COMM_WORLD"
      },
      {
        "id": "E",
        "text": "Source 1, tag 8, MPI_COMM_WORLD"
      }
    ],
    "correctId": "D",
    "explanation": "The correct answer is D: Source 0, tag 7, MPI_COMM_WORLD. This choice matches the key concept described in the question.",
    "subject": "Memory and parallel design"
  },
  {
    "id": "F16",
    "sourceId": "F16",
    "text": "A process starts MPI_Isend using buffer buf and then performs unrelated computation. When is it safe to overwrite buf for a new purpose?",
    "options": [
      {
        "id": "A",
        "text": "After changing the message tag variable in the caller"
      },
      {
        "id": "B",
        "text": "As soon as another unrelated request completes"
      },
      {
        "id": "C",
        "text": "Immediately after MPI_Isend returns, regardless of completion"
      },
      {
        "id": "D",
        "text": "After completion of that send has been confirmed, for example by MPI_Wait"
      },
      {
        "id": "E",
        "text": "After the receiving process’s rank has been printed"
      }
    ],
    "correctId": "D",
    "explanation": "The correct answer is D: After completion of that send has been confirmed, for example by MPI_Wait. This choice matches the key concept described in the question.",
    "subject": "Memory and parallel design"
  },
  {
    "id": "F17",
    "sourceId": "F17",
    "text": "Two ranks each issue a blocking send to the other before posting their receive. The program must work even when MPI cannot buffer the messages. Which change directly avoids relying on that buffering?",
    "options": [
      {
        "id": "A",
        "text": "Add a barrier immediately before both blocking sends"
      },
      {
        "id": "B",
        "text": "Print each rank number before its blocking send"
      },
      {
        "id": "C",
        "text": "Give both messages the same tag without changing the order"
      },
      {
        "id": "D",
        "text": "Use MPI_Sendrecv to perform the paired send and receive"
      },
      {
        "id": "E",
        "text": "Use larger send buffers without changing the order"
      }
    ],
    "correctId": "D",
    "explanation": "The correct answer is D: Use MPI_Sendrecv to perform the paired send and receive. This choice matches the key concept described in the question.",
    "subject": "Memory and parallel design"
  },
  {
    "id": "F18",
    "sourceId": "F18",
    "text": "Two ranks have different private values of x and then call MPI_Barrier. No data-transfer operation is performed. What does the barrier guarantee?",
    "options": [
      {
        "id": "A",
        "text": "Each rank receives the sum of both values of x"
      },
      {
        "id": "B",
        "text": "Rank 0’s x is copied to rank 1"
      },
      {
        "id": "C",
        "text": "Neither rank completes the barrier before both have entered it"
      },
      {
        "id": "D",
        "text": "Both private values of x become equal"
      },
      {
        "id": "E",
        "text": "All ordinary variables become shared after the barrier"
      }
    ],
    "correctId": "C",
    "explanation": "The correct answer is C: Neither rank completes the barrier before both have entered it. This choice matches the key concept described in the question.",
    "subject": "Memory and parallel design"
  },
  {
    "id": "F19",
    "sourceId": "F19",
    "text": "An array is shared by threads on one node. A loop updates each element independently exactly once. Which construct directly divides those iterations across a newly created team?",
    "options": [
      {
        "id": "A",
        "text": "#pragma omp barrier before the serial loop"
      },
      {
        "id": "B",
        "text": "#pragma omp critical around the unchanged full loop"
      },
      {
        "id": "C",
        "text": "#pragma omp parallel for"
      },
      {
        "id": "D",
        "text": "#pragma omp single around the full loop"
      },
      {
        "id": "E",
        "text": "#pragma omp parallel around the unchanged full loop"
      }
    ],
    "correctId": "C",
    "explanation": "The correct answer is C: #pragma omp parallel for. This choice matches the key concept described in the question.",
    "subject": "High Performance Computing"
  },
  {
    "id": "F20",
    "sourceId": "F20",
    "text": "A variable t is declared outside an OpenMP parallel loop. Each iteration assigns t = a[i] * 2 and then uses t to write b[i]. Different iterations write different b elements. Which clause avoids races on t without serializing the loop?",
    "options": [
      {
        "id": "A",
        "text": "shared(t)"
      },
      {
        "id": "B",
        "text": "private(t)"
      },
      {
        "id": "C",
        "text": "collapse(1) alone"
      },
      {
        "id": "D",
        "text": "nowait alone"
      },
      {
        "id": "E",
        "text": "schedule(static) alone"
      }
    ],
    "correctId": "B",
    "explanation": "The correct answer is B: private(t). This choice matches the key concept described in the question.",
    "subject": "Memory and parallel design"
  },
  {
    "id": "F21",
    "sourceId": "F21",
    "text": "Assume valid OpenMP execution. What is sum after this code? int sum = 0; #pragma omp parallel for reduction(+:sum) for (int i = 1; i <= 5; ++i) sum += 2*i;",
    "options": [
      {
        "id": "A",
        "text": "60"
      },
      {
        "id": "B",
        "text": "30"
      },
      {
        "id": "C",
        "text": "15"
      },
      {
        "id": "D",
        "text": "25"
      },
      {
        "id": "E",
        "text": "10"
      }
    ],
    "correctId": "B",
    "explanation": "The correct answer is B: 30. This choice matches the key concept described in the question.",
    "subject": "Memory and parallel design"
  },
  {
    "id": "F22",
    "sourceId": "F22",
    "text": "Threads increment one shared integer counter. The update is only counter++. Which OpenMP construct can directly make this individual update atomic?",
    "options": [
      {
        "id": "A",
        "text": "A shared(counter) clause by itself"
      },
      {
        "id": "B",
        "text": "An atomic directive immediately before counter++"
      },
      {
        "id": "C",
        "text": "A barrier immediately before every unsynchronized counter++"
      },
      {
        "id": "D",
        "text": "A static schedule by itself"
      },
      {
        "id": "E",
        "text": "A private(counter) clause while still expecting a shared total"
      }
    ],
    "correctId": "B",
    "explanation": "The correct answer is B: An atomic directive immediately before counter++. This choice matches the key concept described in the question.",
    "subject": "PGAS and UPC"
  },
  {
    "id": "F23",
    "sourceId": "F23",
    "text": "An OpenMP loop has iterations 0 through 11, three threads, and schedule(static,2). Which iterations are assigned to thread 2?",
    "options": [
      {
        "id": "A",
        "text": "0, 1, 6, 7"
      },
      {
        "id": "B",
        "text": "2, 5, 8, 11"
      },
      {
        "id": "C",
        "text": "2, 3, 8, 9"
      },
      {
        "id": "D",
        "text": "6, 7, 8, 9"
      },
      {
        "id": "E",
        "text": "4, 5, 10, 11"
      }
    ],
    "correctId": "E",
    "explanation": "The correct answer is E: 4, 5, 10, 11. This choice matches the key concept described in the question.",
    "subject": "Memory and parallel design"
  },
  {
    "id": "F24",
    "sourceId": "F24",
    "text": "A hybrid job runs 2 MPI processes on each of 3 nodes. Each process creates 4 OpenMP threads, including its primary thread. During those parallel regions, how many MPI processes and OpenMP threads are there in total?",
    "options": [
      {
        "id": "A",
        "text": "3 processes and 12 threads"
      },
      {
        "id": "B",
        "text": "24 processes and 6 threads"
      },
      {
        "id": "C",
        "text": "6 processes and 18 threads"
      },
      {
        "id": "D",
        "text": "6 processes and 24 threads"
      },
      {
        "id": "E",
        "text": "2 processes and 24 threads"
      }
    ],
    "correctId": "D",
    "explanation": "The correct answer is D: 6 processes and 24 threads. This choice matches the key concept described in the question.",
    "subject": "Memory and parallel design"
  },
  {
    "id": "F25",
    "sourceId": "F25",
    "text": "Mappers emit (’x’,4), (’y’,2), (’x’,6), and (’y’,5). A reducer sums values for each key. What is the output, ignoring order?",
    "options": [
      {
        "id": "A",
        "text": "(’x’,4) and (’y’,6)"
      },
      {
        "id": "B",
        "text": "(’x’,10) and (’y’,7)"
      },
      {
        "id": "C",
        "text": "(’x’,6) and (’y’,5)"
      },
      {
        "id": "D",
        "text": "(’x’,17) only"
      },
      {
        "id": "E",
        "text": "(’x’,2) and (’y’,2)"
      }
    ],
    "correctId": "B",
    "explanation": "The correct answer is B: (’x’,10) and (’y’,7). This choice matches the key concept described in the question.",
    "subject": "MapReduce and distributed storage"
  },
  {
    "id": "F26",
    "sourceId": "F26",
    "text": "Two mappers produce records with the same intermediate key. What must the shuffle and grouping stage ensure for ordinary per-key reduction?",
    "options": [
      {
        "id": "A",
        "text": "Each mapper’s records are reduced separately regardless of key"
      },
      {
        "id": "B",
        "text": "They are assigned to different reducers to avoid duplicate keys"
      },
      {
        "id": "C",
        "text": "Only the first record for that key is retained"
      },
      {
        "id": "D",
        "text": "The records are grouped by their original input positions"
      },
      {
        "id": "E",
        "text": "Those records are assigned to the same reduce group"
      }
    ],
    "correctId": "E",
    "explanation": "The correct answer is E: Those records are assigned to the same reduce group. This choice matches the key concept described in the question.",
    "subject": "MapReduce and distributed storage"
  },
  {
    "id": "F27",
    "sourceId": "F27",
    "text": "A MapReduce job uses a combiner for local aggregation. Which correctness assumption should the job make?",
    "options": [
      {
        "id": "A",
        "text": "The final answer must remain correct even if the combiner is not executed"
      },
      {
        "id": "B",
        "text": "The combiner is guaranteed to run exactly once on every mapper output"
      },
      {
        "id": "C",
        "text": "The combiner can replace the reducer for any application"
      },
      {
        "id": "D",
        "text": "Every key must be processed by one combiner only"
      },
      {
        "id": "E",
        "text": "The reducer can assume the combiner has already seen every global value"
      }
    ],
    "correctId": "A",
    "explanation": "The correct answer is A: The final answer must remain correct even if the combiner is not executed. This choice matches the key concept described in the question.",
    "subject": "MapReduce and distributed storage"
  },
  {
    "id": "F28",
    "sourceId": "F28",
    "text": "For an inverted index, a reducer receives word ’parallel’ with document IDs [D1,D1,D3]. If the index should list each containing document once, what should this reducer output?",
    "options": [
      {
        "id": "A",
        "text": "’parallel’ mapped to {D1} only"
      },
      {
        "id": "B",
        "text": "’parallel’ mapped to {D1,D3}"
      },
      {
        "id": "C",
        "text": "D3 mapped to the integer 1 only"
      },
      {
        "id": "D",
        "text": "’parallel’ mapped to the integer 3"
      },
      {
        "id": "E",
        "text": "D1 mapped to {’parallel’} only"
      }
    ],
    "correctId": "B",
    "explanation": "The correct answer is B: ’parallel’ mapped to {D1,D3}. This choice matches the key concept described in the question.",
    "subject": "MapReduce and distributed storage"
  },
  {
    "id": "F29",
    "sourceId": "F29",
    "text": "An HDFS client has a file path but needs to know which machines store its blocks. Which component normally provides this metadata?",
    "options": [
      {
        "id": "A",
        "text": "The job’s last completed mapper"
      },
      {
        "id": "B",
        "text": "An application’s partitioner"
      },
      {
        "id": "C",
        "text": "The MapReduce combiner"
      },
      {
        "id": "D",
        "text": "The reduce function"
      },
      {
        "id": "E",
        "text": "The NameNode"
      }
    ],
    "correctId": "E",
    "explanation": "The correct answer is E: The NameNode. This choice matches the key concept described in the question.",
    "subject": "MapReduce and distributed storage"
  },
  {
    "id": "F30",
    "sourceId": "F30",
    "text": "An HDFS client has obtained the locations of a file’s blocks. Which statement describes the usual data-read path?",
    "options": [
      {
        "id": "A",
        "text": "The partitioner supplies the stored block contents"
      },
      {
        "id": "B",
        "text": "The NameNode relays every block byte through itself"
      },
      {
        "id": "C",
        "text": "The client asks a reducer to reconstruct every block"
      },
      {
        "id": "D",
        "text": "The job scheduler sends the file’s bytes to the client"
      },
      {
        "id": "E",
        "text": "The client reads block bytes from the relevant DataNodes"
      }
    ],
    "correctId": "E",
    "explanation": "The correct answer is E: The client reads block bytes from the relevant DataNodes. This choice matches the key concept described in the question.",
    "subject": "MapReduce and distributed storage"
  },
  {
    "id": "F31",
    "sourceId": "F31",
    "text": "A CUDA kernel is launched as update<<<6,96>>>(...). How many blocks and total threads are requested?",
    "options": [
      {
        "id": "A",
        "text": "96 blocks and 576 threads"
      },
      {
        "id": "B",
        "text": "6 blocks and 96 threads"
      },
      {
        "id": "C",
        "text": "6 blocks and 576 threads"
      },
      {
        "id": "D",
        "text": "96 blocks and 6 threads"
      },
      {
        "id": "E",
        "text": "6 blocks and 102 threads"
      }
    ],
    "correctId": "C",
    "explanation": "The correct answer is C: 6 blocks and 576 threads. This choice matches the key concept described in the question.",
    "subject": "GPU and CUDA"
  },
  {
    "id": "F32",
    "sourceId": "F32",
    "text": "A launch uses 5 blocks of 128 threads for an array with 600 elements. The kernel accesses the array only when i < 600. How many launched threads skip the guarded array operation?",
    "options": [
      {
        "id": "A",
        "text": "128"
      },
      {
        "id": "B",
        "text": "24"
      },
      {
        "id": "C",
        "text": "88"
      },
      {
        "id": "D",
        "text": "40"
      },
      {
        "id": "E",
        "text": "600"
      }
    ],
    "correctId": "D",
    "explanation": "The correct answer is D: 40. This choice matches the key concept described in the question.",
    "subject": "GPU and CUDA"
  },
  {
    "id": "F33",
    "sourceId": "F33",
    "text": "A grid-stride loop uses 3 blocks of 64 threads. A thread starts at i = 5 and advances by blockDim.x * gridDim.x. For an array length of 500, which indices does it process?",
    "options": [
      {
        "id": "A",
        "text": "5, 197 only"
      },
      {
        "id": "B",
        "text": "5, 192, 384"
      },
      {
        "id": "C",
        "text": "5, 197, 389"
      },
      {
        "id": "D",
        "text": "5, 8, 11"
      },
      {
        "id": "E",
        "text": "5, 69, 133, 197, 261, 325, 389, 453"
      }
    ],
    "correctId": "C",
    "explanation": "The correct answer is C: 5, 197, 389. This choice matches the key concept described in the question.",
    "subject": "High Performance Computing"
  },
  {
    "id": "F34",
    "sourceId": "F34",
    "text": "In an explicit separate-memory CUDA program, a completed kernel has written a device output buffer. Which sequence lets the CPU use the values and then releases that device buffer?",
    "options": [
      {
        "id": "A",
        "text": "cudaFree the device buffer, then copy its contents to the host"
      },
      {
        "id": "B",
        "text": "Call cudaMalloc again on the device pointer, then read the old values"
      },
      {
        "id": "C",
        "text": "Call __syncthreads() on the host, then read the device pointer directly"
      },
      {
        "id": "D",
        "text": "Assign the device pointer to a host pointer, then free it with free"
      },
      {
        "id": "E",
        "text": "Copy device output to a host buffer, then cudaFree the device buffer"
      }
    ],
    "correctId": "E",
    "explanation": "The correct answer is E: Copy device output to a host buffer, then cudaFree the device buffer. This choice matches the key concept described in the question.",
    "subject": "GPU and CUDA"
  },
  {
    "id": "F35",
    "sourceId": "F35",
    "text": "Each CUDA block cooperatively loads a tile reused only by threads in that block. Which memory space is designed for this block-level cooperation?",
    "options": [
      {
        "id": "A",
        "text": "Per-thread local memory"
      },
      {
        "id": "B",
        "text": "Per-thread registers only"
      },
      {
        "id": "C",
        "text": "Shared memory"
      },
      {
        "id": "D",
        "text": "Host stack memory"
      },
      {
        "id": "E",
        "text": "A private CPU cache line"
      }
    ],
    "correctId": "C",
    "explanation": "The correct answer is C: Shared memory. This choice matches the key concept described in the question.",
    "subject": "GPU and CUDA"
  },
  {
    "id": "F36",
    "sourceId": "F36",
    "text": "After all threads in a block load their assigned shared-memory values, each thread reads values loaded by other threads. Where should a block barrier normally be placed?",
    "options": [
      {
        "id": "A",
        "text": "Only before the cooperative loads"
      },
      {
        "id": "B",
        "text": "Only in the thread with the largest index"
      },
      {
        "id": "C",
        "text": "Between the cooperative loads and the cross-thread reads"
      },
      {
        "id": "D",
        "text": "Only after all cross-thread reads"
      },
      {
        "id": "E",
        "text": "Only in threads whose loaded value is positive"
      }
    ],
    "correctId": "C",
    "explanation": "The correct answer is C: Between the cooperative loads and the cross-thread reads. This choice matches the key concept described in the question.",
    "subject": "Memory and parallel design"
  },
  {
    "id": "F37",
    "sourceId": "F37",
    "text": "Every active thread in a warp evaluates a branch condition as true. What can be concluded about that branch?",
    "options": [
      {
        "id": "A",
        "text": "It does not split that warp into different branch paths"
      },
      {
        "id": "B",
        "text": "It forces all blocks in the grid to synchronize"
      },
      {
        "id": "C",
        "text": "It converts all accesses inside the branch into shared-memory accesses"
      },
      {
        "id": "D",
        "text": "It guarantees the entire kernel has no other performance bottleneck"
      },
      {
        "id": "E",
        "text": "It necessarily causes divergence because it contains an if statement"
      }
    ],
    "correctId": "A",
    "explanation": "The correct answer is A: It does not split that warp into different branch paths. This choice matches the key concept described in the question.",
    "subject": "GPU and CUDA"
  },
  {
    "id": "F38",
    "sourceId": "F38",
    "text": "A 2D CUDA block is configured as dim3(12,8). How many threads are in the block?",
    "options": [
      {
        "id": "A",
        "text": "20"
      },
      {
        "id": "B",
        "text": "144"
      },
      {
        "id": "C",
        "text": "96"
      },
      {
        "id": "D",
        "text": "64"
      },
      {
        "id": "E",
        "text": "48"
      }
    ],
    "correctId": "C",
    "explanation": "The correct answer is C: 96. This choice matches the key concept described in the question.",
    "subject": "GPU and CUDA"
  },
  {
    "id": "F39",
    "sourceId": "F39",
    "text": "A binary sum reduction starts with 32 partial values and halves their number each round. How many combining rounds are needed to obtain one value?",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "4"
      },
      {
        "id": "C",
        "text": "16"
      },
      {
        "id": "D",
        "text": "6"
      },
      {
        "id": "E",
        "text": "32"
      }
    ],
    "correctId": "A",
    "explanation": "The correct answer is A: 5. This choice matches the key concept described in the question.",
    "subject": "High Performance Computing"
  },
  {
    "id": "F40",
    "sourceId": "F40",
    "text": "The program defines r = sc.textFile(path), then s = r.filter(test), and finally n = s.count(). What normally causes the filter computation to execute?",
    "options": [
      {
        "id": "A",
        "text": "The definition of test before reading any data"
      },
      {
        "id": "B",
        "text": "The existence of a file path string"
      },
      {
        "id": "C",
        "text": "The count action requesting its result"
      },
      {
        "id": "D",
        "text": "The assignment of the Python variable name s by itself"
      },
      {
        "id": "E",
        "text": "Only a later call to collect, even after count"
      }
    ],
    "correctId": "C",
    "explanation": "The correct answer is C: The count action requesting its result. This choice matches the key concept described in the question.",
    "subject": "High Performance Computing"
  },
  {
    "id": "F41",
    "sourceId": "F41",
    "text": "An RDD contains [1,2,3,4]. It is filtered with x % 2 == 0 and then mapped with x + 3. What values result, ignoring partition layout?",
    "options": [
      {
        "id": "A",
        "text": "[2,4]"
      },
      {
        "id": "B",
        "text": "[4,5,6,7]"
      },
      {
        "id": "C",
        "text": "[6,8]"
      },
      {
        "id": "D",
        "text": "[5,7]"
      },
      {
        "id": "E",
        "text": "[4,6]"
      }
    ],
    "correctId": "D",
    "explanation": "The correct answer is D: [5,7]. This choice matches the key concept described in the question.",
    "subject": "Spark"
  },
  {
    "id": "F42",
    "sourceId": "F42",
    "text": "A pair RDD contains (’p’,3), (’q’,5), (’p’,4), and (’q’,1). What does reduceByKey(addition) produce, ignoring output order?",
    "options": [
      {
        "id": "A",
        "text": "(’p’,13) only"
      },
      {
        "id": "B",
        "text": "(’p’,7) and (’q’,6)"
      },
      {
        "id": "C",
        "text": "(’p’,4) and (’q’,5)"
      },
      {
        "id": "D",
        "text": "(’p’,2) and (’q’,2)"
      },
      {
        "id": "E",
        "text": "(’p’,[3,4]) and (’q’,[5,1])"
      }
    ],
    "correctId": "B",
    "explanation": "The correct answer is B: (’p’,7) and (’q’,6). This choice matches the key concept described in the question.",
    "subject": "Spark"
  },
  {
    "id": "F43",
    "sourceId": "F43",
    "text": "RDD A contains (’r’,2) and (’s’,8). RDD B contains (’r’,5) and (’t’,9). What does A.join(B) produce, ignoring output order?",
    "options": [
      {
        "id": "A",
        "text": "(’r’,(2,5)) and (’s’,(8,9))"
      },
      {
        "id": "B",
        "text": "(’r’,7) only"
      },
      {
        "id": "C",
        "text": "(’r’,(2,5)) only"
      },
      {
        "id": "D",
        "text": "(’r’,(5,2)) only"
      },
      {
        "id": "E",
        "text": "(’r’,(2,5)), (’s’,(8,0)), and (’t’,(0,9))"
      }
    ],
    "correctId": "C",
    "explanation": "The correct answer is C: (’r’,(2,5)) only. This choice matches the key concept described in the question.",
    "subject": "Spark"
  },
  {
    "id": "F44",
    "sourceId": "F44",
    "text": "A very large RDD should remain distributed, but the developer wants to inspect five records. Which action most directly limits the records returned to the driver?",
    "options": [
      {
        "id": "A",
        "text": "take(5)"
      },
      {
        "id": "B",
        "text": "cache()"
      },
      {
        "id": "C",
        "text": "repartition(5)"
      },
      {
        "id": "D",
        "text": "collect()"
      },
      {
        "id": "E",
        "text": "count()"
      }
    ],
    "correctId": "A",
    "explanation": "The correct answer is A: take(5). This choice matches the key concept described in the question.",
    "subject": "Spark"
  },
  {
    "id": "F45",
    "sourceId": "F45",
    "text": "Which statement correctly distinguishes a Spark driver from executors in a cluster?",
    "options": [
      {
        "id": "A",
        "text": "Executors build the user’s application while the driver stores every partition"
      },
      {
        "id": "B",
        "text": "The driver is simply another name for the first input partition"
      },
      {
        "id": "C",
        "text": "Each RDD replaces the need for both a driver and executors"
      },
      {
        "id": "D",
        "text": "The driver coordinates work; executors run tasks on partitions"
      },
      {
        "id": "E",
        "text": "The driver runs all partition tasks and executors only store source code"
      }
    ],
    "correctId": "D",
    "explanation": "The correct answer is D: The driver coordinates work; executors run tasks on partitions. This choice matches the key concept described in the question.",
    "subject": "Spark"
  },
  {
    "id": "F46",
    "sourceId": "F46",
    "text": "All Spark tasks need a small lookup table that they will only read. Which feature is intended to distribute this shared input efficiently?",
    "options": [
      {
        "id": "A",
        "text": "A broadcast variable"
      },
      {
        "id": "B",
        "text": "collect() on every task’s input"
      },
      {
        "id": "C",
        "text": "An accumulator used as a mutable dictionary"
      },
      {
        "id": "D",
        "text": "A global Python variable updated independently by each task"
      },
      {
        "id": "E",
        "text": "A reduce action replacing the lookup table"
      }
    ],
    "correctId": "A",
    "explanation": "The correct answer is A: A broadcast variable. This choice matches the key concept described in the question.",
    "subject": "Spark"
  },
  {
    "id": "F47",
    "sourceId": "F47",
    "text": "A data set has named columns, and the application needs SQL-style filtering and aggregation. Which Spark component directly supports this structured-data use?",
    "options": [
      {
        "id": "A",
        "text": "The local[2] execution setting"
      },
      {
        "id": "B",
        "text": "Only the RDD lineage metadata"
      },
      {
        "id": "C",
        "text": "Only the accumulator API"
      },
      {
        "id": "D",
        "text": "Spark’s broadcast-variable mechanism"
      },
      {
        "id": "E",
        "text": "Spark SQL"
      }
    ],
    "correctId": "E",
    "explanation": "The correct answer is E: Spark SQL. This choice matches the key concept described in the question.",
    "subject": "Spark"
  },
  {
    "id": "F48",
    "sourceId": "F48",
    "text": "A UPC program can address shared data associated with another thread. Which conclusion is valid?",
    "options": [
      {
        "id": "A",
        "text": "All shared accesses have the same cost regardless of affinity"
      },
      {
        "id": "B",
        "text": "Every shared object has a separate independent copy on every thread"
      },
      {
        "id": "C",
        "text": "A shared address can be dereferenced only by its affinity thread"
      },
      {
        "id": "D",
        "text": "Shared addressing removes all need for synchronization"
      },
      {
        "id": "E",
        "text": "The data is globally addressable, but remote and local access costs may differ"
      }
    ],
    "correctId": "E",
    "explanation": "The correct answer is E: The data is globally addressable, but remote and local access costs may differ. This choice matches the key concept described in the question.",
    "subject": "PGAS and UPC"
  },
  {
    "id": "F49",
    "sourceId": "F49",
    "text": "In UPC, a private variable is declared outside a shared-memory data structure. Different threads assign different values to their own instances. Which statement is correct?",
    "options": [
      {
        "id": "A",
        "text": "Each thread retains its own private instance"
      },
      {
        "id": "B",
        "text": "Every write updates a replicated global shared variable"
      },
      {
        "id": "C",
        "text": "All instances become equal at the next barrier"
      },
      {
        "id": "D",
        "text": "The value written by the largest thread ID replaces every instance"
      },
      {
        "id": "E",
        "text": "The variable automatically acquires affinity to thread 0"
      }
    ],
    "correctId": "A",
    "explanation": "The correct answer is A: Each thread retains its own private instance. This choice matches the key concept described in the question.",
    "subject": "PGAS and UPC"
  },
  {
    "id": "F50",
    "sourceId": "F50",
    "text": "With THREADS = 4 and shared [3] int a[24], which thread has affinity to a[14]?",
    "options": [
      {
        "id": "A",
        "text": "Thread 1"
      },
      {
        "id": "B",
        "text": "Thread 2"
      },
      {
        "id": "C",
        "text": "Thread 0"
      },
      {
        "id": "D",
        "text": "Every thread"
      },
      {
        "id": "E",
        "text": "Thread 3"
      }
    ],
    "correctId": "C",
    "explanation": "The correct answer is C: Thread 0. This choice matches the key concept described in the question.",
    "subject": "PGAS and UPC"
  },
  {
    "id": "F51",
    "sourceId": "F51",
    "text": "With THREADS = 3 and shared [2] int a[12], which indices have affinity to thread 1?",
    "options": [
      {
        "id": "A",
        "text": "0, 1, 6, 7"
      },
      {
        "id": "B",
        "text": "2, 3, 8, 9"
      },
      {
        "id": "C",
        "text": "1, 4, 7, 10"
      },
      {
        "id": "D",
        "text": "4, 5, 10, 11"
      },
      {
        "id": "E",
        "text": "2, 3, 4, 5"
      }
    ],
    "correctId": "B",
    "explanation": "The correct answer is B: 2, 3, 8, 9. This choice matches the key concept described in the question.",
    "subject": "PGAS and UPC"
  },
  {
    "id": "F52",
    "sourceId": "F52",
    "text": "All UPC threads must participate in creating one shared allocation and receive a pointer to that same allocation. Which routine fits this requirement?",
    "options": [
      {
        "id": "A",
        "text": "malloc called independently by every thread"
      },
      {
        "id": "B",
        "text": "upc_memget"
      },
      {
        "id": "C",
        "text": "upc_all_alloc"
      },
      {
        "id": "D",
        "text": "upc_memput"
      },
      {
        "id": "E",
        "text": "upc_global_alloc called independently by every thread"
      }
    ],
    "correctId": "C",
    "explanation": "The correct answer is C: upc_all_alloc. This choice matches the key concept described in the question.",
    "subject": "PGAS and UPC"
  },
  {
    "id": "F53",
    "sourceId": "F53",
    "text": "A UPC thread needs to read a shared data block into a private work buffer, modify that buffer, and copy it back. Which transfer sequence matches these directions?",
    "options": [
      {
        "id": "A",
        "text": "upc_memget, then upc_memput"
      },
      {
        "id": "B",
        "text": "upc_memget, then upc_memget"
      },
      {
        "id": "C",
        "text": "upc_memput, then upc_memget"
      },
      {
        "id": "D",
        "text": "upc_memput, then upc_memput"
      },
      {
        "id": "E",
        "text": "upc_all_alloc, then upc_global_alloc"
      }
    ],
    "correctId": "A",
    "explanation": "The correct answer is A: upc_memget, then upc_memput. This choice matches the key concept described in the question.",
    "subject": "PGAS and UPC"
  },
  {
    "id": "F54",
    "sourceId": "F54",
    "text": "A UPC lock protects an update to a shared counter. Which behavior is guaranteed when all updating threads use that same lock correctly?",
    "options": [
      {
        "id": "A",
        "text": "Every lock operation also completes a global barrier"
      },
      {
        "id": "B",
        "text": "The protected updates do not execute concurrently"
      },
      {
        "id": "C",
        "text": "Each thread gets a private copy of the shared counter"
      },
      {
        "id": "D",
        "text": "The counter’s affinity changes to each thread that locks it"
      },
      {
        "id": "E",
        "text": "The updates occur in increasing MYTHREAD order"
      }
    ],
    "correctId": "B",
    "explanation": "The correct answer is B: The protected updates do not execute concurrently. This choice matches the key concept described in the question.",
    "subject": "PGAS and UPC"
  },
  {
    "id": "F55",
    "sourceId": "F55",
    "text": "A graph application needs shortest-path distances between every pair of vertices, rather than from only one source. Which algorithm from the lecture directly addresses this task?",
    "options": [
      {
        "id": "A",
        "text": "A connected-components labeling algorithm"
      },
      {
        "id": "B",
        "text": "Floyd’s algorithm"
      },
      {
        "id": "C",
        "text": "A single run of Dijkstra from one fixed source"
      },
      {
        "id": "D",
        "text": "Prim’s algorithm"
      },
      {
        "id": "E",
        "text": "A Boolean transitive-closure calculation"
      }
    ],
    "correctId": "B",
    "explanation": "The correct answer is B: Floyd’s algorithm. This choice matches the key concept described in the question.",
    "subject": "Basic parallel graph algorithms"
  },
  {
    "id": "F56",
    "sourceId": "F56",
    "text": "A transitive-closure matrix marks vertex V as reachable from vertex U. What does this establish?",
    "options": [
      {
        "id": "A",
        "text": "There is a path from U to V"
      },
      {
        "id": "B",
        "text": "Every path from U must end at V"
      },
      {
        "id": "C",
        "text": "There must be a direct edge from U to V"
      },
      {
        "id": "D",
        "text": "U and V have exactly the same neighbors"
      },
      {
        "id": "E",
        "text": "The shortest path from U to V has weight 1"
      }
    ],
    "correctId": "A",
    "explanation": "The correct answer is A: There is a path from U to V. This choice matches the key concept described in the question.",
    "subject": "Basic parallel graph algorithms"
  },
  {
    "id": "F57",
    "sourceId": "F57",
    "text": "For an unweighted undirected graph, its adjacency matrix has A[2][5] = 1. What must be true of A[5][2]?",
    "options": [
      {
        "id": "A",
        "text": "It is also 1"
      },
      {
        "id": "B",
        "text": "It must be 0"
      },
      {
        "id": "C",
        "text": "It can differ because the graph is undirected"
      },
      {
        "id": "D",
        "text": "It equals the number of vertices"
      },
      {
        "id": "E",
        "text": "It equals the length of the shortest path from 2 to 5"
      }
    ],
    "correctId": "A",
    "explanation": "The correct answer is A: It is also 1. This choice matches the key concept described in the question.",
    "subject": "Basic parallel graph algorithms"
  },
  {
    "id": "F58",
    "sourceId": "F58",
    "text": "Three valid spanning trees of the same weighted graph have total edge weights 14, 11, and 16. Among these candidates, which is preferred by the minimum-spanning-tree objective?",
    "options": [
      {
        "id": "A",
        "text": "The tree with total weight 14"
      },
      {
        "id": "B",
        "text": "The tree with the greatest number of branches, regardless of weight"
      },
      {
        "id": "C",
        "text": "All three, because every spanning tree has equal cost"
      },
      {
        "id": "D",
        "text": "The tree with total weight 11"
      },
      {
        "id": "E",
        "text": "The tree with total weight 16"
      }
    ],
    "correctId": "D",
    "explanation": "The correct answer is D: The tree with total weight 11. This choice matches the key concept described in the question.",
    "subject": "Basic parallel graph algorithms"
  },
  {
    "id": "F59",
    "sourceId": "F59",
    "text": "Two routes connect U to V. Route 1 has edge weights 4 and 5; route 2 has weights 2, 3, and 3. Which route has smaller total weight?",
    "options": [
      {
        "id": "A",
        "text": "Route 2, with total weight 6"
      },
      {
        "id": "B",
        "text": "Route 2, with total weight 8"
      },
      {
        "id": "C",
        "text": "Route 1, because it contains fewer edges regardless of weight"
      },
      {
        "id": "D",
        "text": "Route 1, with total weight 9"
      },
      {
        "id": "E",
        "text": "Both, because their total weights are equal"
      }
    ],
    "correctId": "B",
    "explanation": "The correct answer is B: Route 2, with total weight 8. This choice matches the key concept described in the question.",
    "subject": "High Performance Computing"
  },
  {
    "id": "F60",
    "sourceId": "F60",
    "text": "A weighted graph has nonnegative edge weights. The task is to find shortest-path distances from one chosen source to all reachable vertices. Which algorithm directly matches this task?",
    "options": [
      {
        "id": "A",
        "text": "An adjacency-list construction alone"
      },
      {
        "id": "B",
        "text": "A connected-components labeling algorithm"
      },
      {
        "id": "C",
        "text": "Dijkstra’s algorithm"
      },
      {
        "id": "D",
        "text": "Prim’s minimum spanning tree algorithm"
      },
      {
        "id": "E",
        "text": "A Boolean transitive-closure calculation"
      }
    ],
    "correctId": "C",
    "explanation": "The correct answer is C: Dijkstra’s algorithm. This choice matches the key concept described in the question.",
    "subject": "Basic parallel graph algorithms"
  },
  {
    "id": "E1",
    "sourceId": "E1",
    "text": "In the heterogeneous CUDA model taught in the lecture, which work assignment is most typical?",
    "options": [
      {
        "id": "A",
        "text": "The CPU and GPU must execute every instruction together"
      },
      {
        "id": "B",
        "text": "The CPU is used only after all device computations finish"
      },
      {
        "id": "C",
        "text": "The GPU manages host files and the CPU executes all kernel threads"
      },
      {
        "id": "D",
        "text": "Each CUDA thread is a separate CPU process"
      },
      {
        "id": "E",
        "text": "The CPU manages execution and the GPU runs highly parallel kernels"
      }
    ],
    "correctId": "E",
    "explanation": "The correct answer is E: The CPU manages execution and the GPU runs highly parallel kernels. This choice matches the key concept described in the question.",
    "subject": "GPU and CUDA"
  },
  {
    "id": "E3",
    "sourceId": "E3",
    "text": "A 1D kernel uses i = blockIdx.x * blockDim.x + threadIdx.x. If blockIdx.x = 3, blockDim.x = 64, and threadIdx.x = 5, what is i?",
    "options": [
      {
        "id": "A",
        "text": "192"
      },
      {
        "id": "B",
        "text": "320"
      },
      {
        "id": "C",
        "text": "196"
      },
      {
        "id": "D",
        "text": "197"
      },
      {
        "id": "E",
        "text": "69"
      }
    ],
    "correctId": "D",
    "explanation": "The correct answer is D: 197. This choice matches the key concept described in the question.",
    "subject": "GPU and CUDA"
  },
  {
    "id": "E5",
    "sourceId": "E5",
    "text": "One thread processes one element. For N = 1000 and 256 threads per block, how many blocks are needed to cover all elements?",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "4"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "256"
      },
      {
        "id": "E",
        "text": "5"
      }
    ],
    "correctId": "B",
    "explanation": "The correct answer is B: 4. This choice matches the key concept described in the question.",
    "subject": "High Performance Computing"
  },
  {
    "id": "E6",
    "sourceId": "E6",
    "text": "A launch creates 1024 threads for an array of 1000 elements. What is the main purpose of if (i < N) before accessing a[i]?",
    "options": [
      {
        "id": "A",
        "text": "Synchronize the final block with the first block"
      },
      {
        "id": "B",
        "text": "Prevent the extra threads from accessing elements outside the array"
      },
      {
        "id": "C",
        "text": "Make the last block contain fewer physical threads at launch"
      },
      {
        "id": "D",
        "text": "Copy the remaining elements into shared memory"
      },
      {
        "id": "E",
        "text": "Force all blocks to finish in index order"
      }
    ],
    "correctId": "B",
    "explanation": "The correct answer is B: Prevent the extra threads from accessing elements outside the array. This choice matches the key concept described in the question.",
    "subject": "High Performance Computing"
  },
  {
    "id": "E9",
    "sourceId": "E9",
    "text": "A kernel launches blocks numbered 0 through 7. Which execution-order assumption is safe?",
    "options": [
      {
        "id": "A",
        "text": "All blocks must be resident at the same time"
      },
      {
        "id": "B",
        "text": "Block 0 always finishes before block 1 starts"
      },
      {
        "id": "C",
        "text": "The program must not rely on blocks completing in numerical order"
      },
      {
        "id": "D",
        "text": "A lower block index always has priority over a higher one"
      },
      {
        "id": "E",
        "text": "Blocks always finish in reverse numerical order"
      }
    ],
    "correctId": "C",
    "explanation": "The correct answer is C: The program must not rely on blocks completing in numerical order. This choice matches the key concept described in the question.",
    "subject": "GPU and CUDA"
  },
  {
    "id": "E13",
    "sourceId": "E13",
    "text": "Which situation most directly causes branch divergence within a warp?",
    "options": [
      {
        "id": "A",
        "text": "All threads in a warp take the same branch"
      },
      {
        "id": "B",
        "text": "Every thread reads a different adjacent array element"
      },
      {
        "id": "C",
        "text": "Some threads take one branch while other threads in the same warp take another"
      },
      {
        "id": "D",
        "text": "Two separate kernels use different functions"
      },
      {
        "id": "E",
        "text": "Different blocks contain different thread counts across separate launches"
      }
    ],
    "correctId": "C",
    "explanation": "The correct answer is C: Some threads take one branch while other threads in the same warp take another. This choice matches the key concept described in the question.",
    "subject": "GPU and CUDA"
  },
  {
    "id": "E16",
    "sourceId": "E16",
    "text": "Why can Spark be useful for an iterative algorithm that reuses the same data many times?",
    "options": [
      {
        "id": "A",
        "text": "It requires a separate cluster for each iteration"
      },
      {
        "id": "B",
        "text": "It runs every iteration entirely on the driver"
      },
      {
        "id": "C",
        "text": "It guarantees that no computation will ever access disk"
      },
      {
        "id": "D",
        "text": "It automatically removes all algorithmic dependencies"
      },
      {
        "id": "E",
        "text": "It can retain reusable data in memory between iterations"
      }
    ],
    "correctId": "E",
    "explanation": "The correct answer is E: It can retain reusable data in memory between iterations. This choice matches the key concept described in the question.",
    "subject": "Spark"
  },
  {
    "id": "E18",
    "sourceId": "E18",
    "text": "Which operation explicitly redistributes an RDD into a requested number of partitions?",
    "options": [
      {
        "id": "A",
        "text": "map(lambda x: x)"
      },
      {
        "id": "B",
        "text": "count()"
      },
      {
        "id": "C",
        "text": "take(n)"
      },
      {
        "id": "D",
        "text": "repartition(n)"
      },
      {
        "id": "E",
        "text": "cache()"
      }
    ],
    "correctId": "D",
    "explanation": "The correct answer is D: repartition(n). This choice matches the key concept described in the question.",
    "subject": "Spark"
  },
  {
    "id": "E20",
    "sourceId": "E20",
    "text": "An RDD contains the strings ’red blue’ and ’green’. Which operation produces individual word records from splitting each string?",
    "options": [
      {
        "id": "A",
        "text": "flatMap(lambda s: s.split())"
      },
      {
        "id": "B",
        "text": "count()"
      },
      {
        "id": "C",
        "text": "filter(lambda s: s.split())"
      },
      {
        "id": "D",
        "text": "map(lambda s: s.split())"
      },
      {
        "id": "E",
        "text": "reduce(lambda a,b: a+b)"
      }
    ],
    "correctId": "A",
    "explanation": "The correct answer is A: flatMap(lambda s: s.split()). This choice matches the key concept described in the question.",
    "subject": "Spark"
  },
  {
    "id": "E21",
    "sourceId": "E21",
    "text": "What does filter(lambda x: x > 3) produce from [1,4,2,5]?",
    "options": [
      {
        "id": "A",
        "text": "The original four records with new indices"
      },
      {
        "id": "B",
        "text": "The Boolean records False, True, False, True"
      },
      {
        "id": "C",
        "text": "The records 4 and 5"
      },
      {
        "id": "D",
        "text": "The single value 9"
      },
      {
        "id": "E",
        "text": "The records 1 and 2"
      }
    ],
    "correctId": "C",
    "explanation": "The correct answer is C: The records 4 and 5. This choice matches the key concept described in the question.",
    "subject": "High Performance Computing"
  },
  {
    "id": "E27",
    "sourceId": "E27",
    "text": "Workers need to contribute numeric updates to a total that the driver can inspect. Which feature fits this role?",
    "options": [
      {
        "id": "A",
        "text": "A sortByKey operation on unrelated records"
      },
      {
        "id": "B",
        "text": "The RDD’s partition count"
      },
      {
        "id": "C",
        "text": "A shared ordinary Python global variable"
      },
      {
        "id": "D",
        "text": "An accumulator"
      },
      {
        "id": "E",
        "text": "A broadcast variable"
      }
    ],
    "correctId": "D",
    "explanation": "The correct answer is D: An accumulator. This choice matches the key concept described in the question.",
    "subject": "High Performance Computing"
  },
  {
    "id": "E28",
    "sourceId": "E28",
    "text": "An accumulator starts at zero and is incremented inside a lazy transformation. No action has run. What value should be expected when the driver reads it at this point?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "The number of transformation calls written in the program"
      },
      {
        "id": "C",
        "text": "The number of workers"
      },
      {
        "id": "D",
        "text": "The number of input records"
      },
      {
        "id": "E",
        "text": "The number of partitions"
      }
    ],
    "correctId": "A",
    "explanation": "The correct answer is A: 0. This choice matches the key concept described in the question.",
    "subject": "Spark"
  },
  {
    "id": "E29",
    "sourceId": "E29",
    "text": "Which Spark library is intended for SQL queries and structured DataFrames?",
    "options": [
      {
        "id": "A",
        "text": "SparkContext"
      },
      {
        "id": "B",
        "text": "Spark Streaming"
      },
      {
        "id": "C",
        "text": "Spark SQL"
      },
      {
        "id": "D",
        "text": "GraphX"
      },
      {
        "id": "E",
        "text": "MLlib"
      }
    ],
    "correctId": "C",
    "explanation": "The correct answer is C: Spark SQL. This choice matches the key concept described in the question.",
    "subject": "Spark"
  },
  {
    "id": "E34",
    "sourceId": "E34",
    "text": "In the UPC declarations shared int x; and int y;, which statement is correct?",
    "options": [
      {
        "id": "A",
        "text": "x is shared only among threads with even indices"
      },
      {
        "id": "B",
        "text": "Both declarations create one globally shared scalar"
      },
      {
        "id": "C",
        "text": "Both declarations create one private copy per thread"
      },
      {
        "id": "D",
        "text": "There is a private x and one shared y"
      },
      {
        "id": "E",
        "text": "There is one shared x and a private y for each thread"
      }
    ],
    "correctId": "E",
    "explanation": "The correct answer is E: There is one shared x and a private y for each thread. This choice matches the key concept described in the question.",
    "subject": "PGAS and UPC"
  },
  {
    "id": "E36",
    "sourceId": "E36",
    "text": "Which statement about a UPC pointer-to-shared is correct?",
    "options": [
      {
        "id": "A",
        "text": "It can reference shared objects with local or remote affinity"
      },
      {
        "id": "B",
        "text": "It makes every referenced object private"
      },
      {
        "id": "C",
        "text": "It must be stored in shared memory itself"
      },
      {
        "id": "D",
        "text": "It can reference only the calling thread’s private stack"
      },
      {
        "id": "E",
        "text": "It always points to a fully replicated copy"
      }
    ],
    "correctId": "A",
    "explanation": "The correct answer is A: It can reference shared objects with local or remote affinity. This choice matches the key concept described in the question.",
    "subject": "PGAS and UPC"
  },
  {
    "id": "E37",
    "sourceId": "E37",
    "text": "Which allocation routine is collective and returns a pointer to the same shared allocation to all participating threads?",
    "options": [
      {
        "id": "A",
        "text": "malloc"
      },
      {
        "id": "B",
        "text": "upc_free"
      },
      {
        "id": "C",
        "text": "upc_all_alloc"
      },
      {
        "id": "D",
        "text": "upc_memget"
      },
      {
        "id": "E",
        "text": "upc_global_alloc"
      }
    ],
    "correctId": "C",
    "explanation": "The correct answer is C: upc_all_alloc. This choice matches the key concept described in the question.",
    "subject": "High Performance Computing"
  },
  {
    "id": "E38",
    "sourceId": "E38",
    "text": "Which routine copies bytes from a private source buffer into shared destination memory?",
    "options": [
      {
        "id": "A",
        "text": "upc_memput"
      },
      {
        "id": "B",
        "text": "upc_memcpy"
      },
      {
        "id": "C",
        "text": "upc_free"
      },
      {
        "id": "D",
        "text": "upc_memget"
      },
      {
        "id": "E",
        "text": "upc_memset"
      }
    ],
    "correctId": "A",
    "explanation": "The correct answer is A: upc_memput. This choice matches the key concept described in the question.",
    "subject": "Memory and parallel design"
  },
  {
    "id": "E39",
    "sourceId": "E39",
    "text": "What is the main role of the affinity expression in upc_forall?",
    "options": [
      {
        "id": "A",
        "text": "Make all iterations execute on every thread"
      },
      {
        "id": "B",
        "text": "Specify the number of bytes in the loop variable"
      },
      {
        "id": "C",
        "text": "Allocate the shared output array"
      },
      {
        "id": "D",
        "text": "Insert a barrier after each iteration"
      },
      {
        "id": "E",
        "text": "Determine which thread executes each independent iteration"
      }
    ],
    "correctId": "E",
    "explanation": "The correct answer is E: Determine which thread executes each independent iteration. This choice matches the key concept described in the question.",
    "subject": "PGAS and UPC"
  },
  {
    "id": "E41",
    "sourceId": "E41",
    "text": "Which description defines a tree in the undirected setting?",
    "options": [
      {
        "id": "A",
        "text": "A connected graph with no cycles"
      },
      {
        "id": "B",
        "text": "A connected graph with every possible edge"
      },
      {
        "id": "C",
        "text": "Any graph in which every vertex has degree two"
      },
      {
        "id": "D",
        "text": "A graph with exactly one cycle"
      },
      {
        "id": "E",
        "text": "Any graph with weighted edges"
      }
    ],
    "correctId": "A",
    "explanation": "The correct answer is A: A connected graph with no cycles. This choice matches the key concept described in the question.",
    "subject": "High Performance Computing"
  },
  {
    "id": "E45",
    "sourceId": "E45",
    "text": "What does a minimum spanning tree minimize?",
    "options": [
      {
        "id": "A",
        "text": "The shortest-path distance from every vertex to every other vertex"
      },
      {
        "id": "B",
        "text": "The sum of all edges in the original graph, including unused edges"
      },
      {
        "id": "C",
        "text": "The sum of the weights of its selected edges"
      },
      {
        "id": "D",
        "text": "The number of vertices included"
      },
      {
        "id": "E",
        "text": "The largest vertex identifier"
      }
    ],
    "correctId": "C",
    "explanation": "The correct answer is C: The sum of the weights of its selected edges. This choice matches the key concept described in the question.",
    "subject": "Basic parallel graph algorithms"
  },
  {
    "id": "E47",
    "sourceId": "E47",
    "text": "What problem does Dijkstra’s algorithm address for graphs with nonnegative edge weights?",
    "options": [
      {
        "id": "A",
        "text": "Shortest paths from one source to other vertices"
      },
      {
        "id": "B",
        "text": "A maximum-weight spanning tree"
      },
      {
        "id": "C",
        "text": "A list of all possible cycles"
      },
      {
        "id": "D",
        "text": "A minimum spanning tree by total edge weight"
      },
      {
        "id": "E",
        "text": "A partition into connected components only"
      }
    ],
    "correctId": "A",
    "explanation": "The correct answer is A: Shortest paths from one source to other vertices. This choice matches the key concept described in the question.",
    "subject": "Basic parallel graph algorithms"
  },
  {
    "id": "E48",
    "sourceId": "E48",
    "text": "Two available routes from S to T have edge weights (2,3) and (1,6). Which route has the smaller total weight?",
    "options": [
      {
        "id": "A",
        "text": "The route with weights 1 and 6"
      },
      {
        "id": "B",
        "text": "The route with the smaller first edge regardless of the second"
      },
      {
        "id": "C",
        "text": "The route with weights 2 and 3"
      },
      {
        "id": "D",
        "text": "Neither route because each contains two edges"
      },
      {
        "id": "E",
        "text": "They have equal total weight"
      }
    ],
    "correctId": "C",
    "explanation": "The correct answer is C: The route with weights 2 and 3. This choice matches the key concept described in the question.",
    "subject": "High Performance Computing"
  },
  {
    "id": "E49",
    "sourceId": "E49",
    "text": "How does the all-pairs shortest-path problem differ from single-source shortest paths?",
    "options": [
      {
        "id": "A",
        "text": "It ignores edge weights in every graph"
      },
      {
        "id": "B",
        "text": "It asks for shortest paths between every pair of vertices"
      },
      {
        "id": "C",
        "text": "It asks only whether the graph contains a cycle"
      },
      {
        "id": "D",
        "text": "It finds only one minimum spanning tree"
      },
      {
        "id": "E",
        "text": "It asks only for edges adjacent to one chosen vertex"
      }
    ],
    "correctId": "B",
    "explanation": "The correct answer is B: It asks for shortest paths between every pair of vertices. This choice matches the key concept described in the question.",
    "subject": "Basic parallel graph algorithms"
  },
  {
    "id": "E50",
    "sourceId": "E50",
    "text": "Once the next vertex has been selected and announced, which work can different processors do in parallel in the lecture’s formulation?",
    "options": [
      {
        "id": "A",
        "text": "Independently choose incompatible global next vertices"
      },
      {
        "id": "B",
        "text": "Update their own assigned portions of the distance or key array"
      },
      {
        "id": "C",
        "text": "Replace the graph with an unrelated complete graph"
      },
      {
        "id": "D",
        "text": "Skip all later communication even when needed"
      },
      {
        "id": "E",
        "text": "Change other processors’ source programs"
      }
    ],
    "correctId": "B",
    "explanation": "The correct answer is B: Update their own assigned portions of the distance or key array. This choice matches the key concept described in the question.",
    "subject": "Basic parallel graph algorithms"
  },
  {
    "id": "M5",
    "sourceId": "M5",
    "text": "A simulation has 5 x 10^8 cells, performs 200 floating-point operations per cell per step, and runs for 10^4 steps. How many operations are required?",
    "options": [
      {
        "id": "A",
        "text": "10^15"
      },
      {
        "id": "B",
        "text": "5 x 10^14"
      },
      {
        "id": "C",
        "text": "5 x 10^15"
      },
      {
        "id": "D",
        "text": "10^13"
      },
      {
        "id": "E",
        "text": "10^14"
      }
    ],
    "correctId": "A",
    "explanation": "The correct answer is A: 10^15. This choice matches the key concept described in the question.",
    "subject": "High Performance Computing"
  },
  {
    "id": "M9",
    "sourceId": "M9",
    "text": "The best sequential version takes 120 seconds and a parallel version on 8 processors takes 20 seconds. What is the speedup?",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "8"
      },
      {
        "id": "D",
        "text": "6"
      },
      {
        "id": "E",
        "text": "10"
      }
    ],
    "correctId": "D",
    "explanation": "The correct answer is D: 6. This choice matches the key concept described in the question.",
    "subject": "Memory and parallel design"
  },
  {
    "id": "M10",
    "sourceId": "M10",
    "text": "Why can a parallel version run more slowly than a sequential version on a small input?",
    "options": [
      {
        "id": "A",
        "text": "The number of processors replaces execution time in the speedup formula"
      },
      {
        "id": "B",
        "text": "Having fewer iterations per worker guarantees lower total runtime"
      },
      {
        "id": "C",
        "text": "Idle workers increase useful arithmetic work by definition"
      },
      {
        "id": "D",
        "text": "Dividing the data changes the sequential baseline to the sum of worker times"
      },
      {
        "id": "E",
        "text": "Communication and synchronization overhead can exceed the computation saved"
      }
    ],
    "correctId": "E",
    "explanation": "The correct answer is E: Communication and synchronization overhead can exceed the computation saved. This choice matches the key concept described in the question.",
    "subject": "Memory and parallel design"
  },
  {
    "id": "M11",
    "sourceId": "M11",
    "text": "A loop repeatedly accesses a small data set that remains in cache after its first pass. Why are later passes likely to spend less time waiting for data?",
    "options": [
      {
        "id": "A",
        "text": "Main memory becomes physically larger after the first pass"
      },
      {
        "id": "B",
        "text": "More accesses can be served from cache instead of lower memory levels"
      },
      {
        "id": "C",
        "text": "The cache permanently increases the clock frequency"
      },
      {
        "id": "D",
        "text": "Each later pass necessarily executes fewer loop iterations"
      },
      {
        "id": "E",
        "text": "The first pass eliminates the arithmetic in later passes"
      }
    ],
    "correctId": "B",
    "explanation": "The correct answer is B: More accesses can be served from cache instead of lower memory levels. This choice matches the key concept described in the question.",
    "subject": "Memory and parallel design"
  },
  {
    "id": "M14",
    "sourceId": "M14",
    "text": "A program reads a[0], a[1], a[2], and a[3] consecutively. Which feature most directly helps this access pattern?",
    "options": [
      {
        "id": "A",
        "text": "Assigning each adjacent element to a different cache line"
      },
      {
        "id": "B",
        "text": "Increasing the stride between consecutive accesses"
      },
      {
        "id": "C",
        "text": "Keeping only the most recently used element rather than its neighbors"
      },
      {
        "id": "D",
        "text": "Reusing the same individual element many times"
      },
      {
        "id": "E",
        "text": "A cache line containing neighboring array elements"
      }
    ],
    "correctId": "E",
    "explanation": "The correct answer is E: A cache line containing neighboring array elements. This choice matches the key concept described in the question.",
    "subject": "High Performance Computing"
  },
  {
    "id": "M18",
    "sourceId": "M18",
    "text": "A simulation divides its spatial grid into regions and applies the same update to each region. Which approach is this?",
    "options": [
      {
        "id": "A",
        "text": "Agglomeration of different functions"
      },
      {
        "id": "B",
        "text": "Dynamic mapping"
      },
      {
        "id": "C",
        "text": "Functional decomposition"
      },
      {
        "id": "D",
        "text": "Domain decomposition"
      },
      {
        "id": "E",
        "text": "Collective communication"
      }
    ],
    "correctId": "D",
    "explanation": "The correct answer is D: Domain decomposition. This choice matches the key concept described in the question.",
    "subject": "High Performance Computing"
  },
  {
    "id": "M21",
    "sourceId": "M21",
    "text": "Each process has one local maximum, and every process needs the global maximum. Which single collective is most appropriate?",
    "options": [
      {
        "id": "A",
        "text": "MPI_Allreduce with MPI_MAX"
      },
      {
        "id": "B",
        "text": "MPI_Bcast of rank 0’s local maximum"
      },
      {
        "id": "C",
        "text": "MPI_Allgather of all local maxima"
      },
      {
        "id": "D",
        "text": "MPI_Reduce with MPI_MAX"
      },
      {
        "id": "E",
        "text": "MPI_Allreduce with MPI_SUM"
      }
    ],
    "correctId": "A",
    "explanation": "The correct answer is A: MPI_Allreduce with MPI_MAX. This choice matches the key concept described in the question.",
    "subject": "High Performance Computing"
  },
  {
    "id": "M23",
    "sourceId": "M23",
    "text": "A process belongs to two different communicators. Which statement is correct?",
    "options": [
      {
        "id": "A",
        "text": "Its rank is its physical core number in both communicators"
      },
      {
        "id": "B",
        "text": "It must have different ranks in both communicators"
      },
      {
        "id": "C",
        "text": "It may have different ranks in the two communicators"
      },
      {
        "id": "D",
        "text": "Its rank must equal the total number of its communicators"
      },
      {
        "id": "E",
        "text": "It must have the same rank in both communicators"
      }
    ],
    "correctId": "C",
    "explanation": "The correct answer is C: It may have different ranks in the two communicators. This choice matches the key concept described in the question.",
    "subject": "High Performance Computing"
  },
  {
    "id": "M39",
    "sourceId": "M39",
    "text": "Assume valid OpenMP execution. What is sum after this code? int sum = 0; #pragma omp parallel for reduction(+:sum) for (int i = 1; i <= 4; ++i) sum += i;",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "6"
      },
      {
        "id": "C",
        "text": "16"
      },
      {
        "id": "D",
        "text": "10"
      },
      {
        "id": "E",
        "text": "4"
      }
    ],
    "correctId": "D",
    "explanation": "The correct answer is D: 10. This choice matches the key concept described in the question.",
    "subject": "Memory and parallel design"
  },
  {
    "id": "M40",
    "sourceId": "M40",
    "text": "A cluster application uses MPI between nodes and OpenMP within each process. What is one potential advantage over keeping many separate copies in MPI processes on a node?",
    "options": [
      {
        "id": "A",
        "text": "Threads can share suitable data and reduce replication within each process"
      },
      {
        "id": "B",
        "text": "All process-private arrays become globally shared automatically"
      },
      {
        "id": "C",
        "text": "The serial fraction disappears when both models are used"
      },
      {
        "id": "D",
        "text": "MPI messages become unnecessary between nodes"
      },
      {
        "id": "E",
        "text": "Every hybrid configuration must outperform an MPI-only configuration"
      }
    ],
    "correctId": "A",
    "explanation": "The correct answer is A: Threads can share suitable data and reduce replication within each process. This choice matches the key concept described in the question.",
    "subject": "Memory and parallel design"
  },
  {
    "id": "M41",
    "sourceId": "M41",
    "text": "Which task is directly suited to a single basic MapReduce job?",
    "options": [
      {
        "id": "A",
        "text": "Compute total sales per product from many independent transaction records"
      },
      {
        "id": "B",
        "text": "Modify one shared mutable record after every individual input record"
      },
      {
        "id": "C",
        "text": "Update a state through a strict chain where each step needs the previous result"
      },
      {
        "id": "D",
        "text": "Exchange grid-boundary values repeatedly within every map call"
      },
      {
        "id": "E",
        "text": "Perform each iteration only after a global convergence check from the previous iteration"
      }
    ],
    "correctId": "A",
    "explanation": "The correct answer is A: Compute total sales per product from many independent transaction records. This choice matches the key concept described in the question.",
    "subject": "MapReduce and distributed storage"
  },
  {
    "id": "M42",
    "sourceId": "M42",
    "text": "Two mappers emit (apple,2) and (apple,3). What grouped input should the sum reducer receive for apple?",
    "options": [
      {
        "id": "A",
        "text": "Key apple with the single value [5]"
      },
      {
        "id": "B",
        "text": "Key apple with values [2,3]"
      },
      {
        "id": "C",
        "text": "Key 2 with value apple and key 3 with value apple"
      },
      {
        "id": "D",
        "text": "Key apple with values [1,1]"
      },
      {
        "id": "E",
        "text": "Two independent reduce groups, one with [2] and one with [3]"
      }
    ],
    "correctId": "B",
    "explanation": "The correct answer is B: Key apple with values [2,3]. This choice matches the key concept described in the question.",
    "subject": "MapReduce and distributed storage"
  },
  {
    "id": "M47",
    "sourceId": "M47",
    "text": "What is the primary purpose of a combiner in a word-count job?",
    "options": [
      {
        "id": "A",
        "text": "Combine all global counts before any mapper finishes"
      },
      {
        "id": "B",
        "text": "Choose which reducer owns each key"
      },
      {
        "id": "C",
        "text": "Guarantee that each word occurs on only one mapper"
      },
      {
        "id": "D",
        "text": "Sort the final output across all reducers"
      },
      {
        "id": "E",
        "text": "Aggregate local counts to reduce intermediate network traffic"
      }
    ],
    "correctId": "E",
    "explanation": "The correct answer is E: Aggregate local counts to reduce intermediate network traffic. This choice matches the key concept described in the question.",
    "subject": "High Performance Computing"
  },
  {
    "id": "M50",
    "sourceId": "M50",
    "text": "After obtaining block locations, where does an HDFS client normally get the actual file-block bytes?",
    "options": [
      {
        "id": "A",
        "text": "Directly from the relevant DataNodes"
      },
      {
        "id": "B",
        "text": "From the scheduler that allocated the job"
      },
      {
        "id": "C",
        "text": "From the mapper responsible for the filename"
      },
      {
        "id": "D",
        "text": "Through the NameNode, which relays every block"
      },
      {
        "id": "E",
        "text": "From the reducer assigned to the file’s first key"
      }
    ],
    "correctId": "A",
    "explanation": "The correct answer is A: Directly from the relevant DataNodes. This choice matches the key concept described in the question.",
    "subject": "MapReduce and distributed storage"
  }
]
