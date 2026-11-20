# Жаңа сұрақтар (unique_questions.md-де жоқтары): барлығы 98

Осы 3 PDF-тегі 160 сұрақтың 62-сі `unique_questions.md`-де бұрыннан бар, сондықтан қайталанбады.

---


## HPC_Final_60

**1.** (F1) A program achieves a speedup of 8 on 10 processors. Using efficiency = speedup / processor count, what is its parallel efficiency?
- ✅ **A. 80%**
- B. 100%
- C. 125%
- D. 20%
- E. 8%

**2.** (F2) Two implementations solve the same problem. Version A uses 4 processors for 50 seconds; version B uses 8 processors for 30 seconds. Which comparison of elapsed time and total processor-seconds is correct?
- ✅ **A. B has lower elapsed time but uses more processor-seconds**
- B. B uses twice as many processor-seconds as A
- C. Both use the same processor-seconds because the problem is unchanged
- D. B has lower elapsed time and uses fewer processor-seconds
- E. A has lower elapsed time but uses more processor-seconds

**3.** (F3) A simulation updates 2 million cells, performs 50 floating-point operations per cell per step, and runs for 100 steps. How many floating-point operations are performed in total?
- ✅ **A. 10 billion**
- B. 5 billion
- C. 1 billion
- D. 100 million
- E. 100 billion

**4.** (F4) Two cluster nodes each have 32 GB of private memory. A 48 GB data set can be divided evenly between them. Which statement correctly describes this distributed-memory arrangement?
- A. Either node automatically sees one ordinary 64 GB shared address space
- ✅ **B. Each node can hold a 24 GB partition, with remote data exchanged explicitly**
- C. A barrier makes both private memories directly addressable as one array
- D. Each node must reserve 48 GB even when it uses only its own partition
- E. Both nodes must store all 48 GB before distributed processing can begin

**5.** (F5) A job spends 12 seconds in a serial phase and 88 seconds in a phase that divides perfectly over 4 processors. Ignoring overhead, what is the total parallel runtime?
- A. 22 seconds
- B. 100 seconds
- C. 25 seconds
- D. 40 seconds
- ✅ **E. 34 seconds**

**6.** (F6) Four workers begin together and take 8, 8, 8, and 20 seconds to finish their assigned work. A final barrier has negligible overhead. How long does this parallel phase take?
- A. 8 seconds
- ✅ **B. 20 seconds**
- C. 44 seconds
- D. 11 seconds
- E. 12 seconds Memory and parallel design

**7.** (F7) A cache line holds 64 bytes. A contiguous array stores 8-byte elements, and a[0] begins at a cache-line boundary. How many array elements fit in the first cache line?
- A. 64
- B. 512
- C. 4
- ✅ **D. 8**
- E. 16

**8.** (F8) A program repeatedly scans a working set much larger than cache capacity. Why might many accesses still miss after the first complete scan?
- A. Only writes can bring data into cache
- B. The first scan permanently disables caching for those addresses
- C. Each additional scan reduces physical cache capacity
- ✅ **D. Earlier cache lines may be evicted before the next scan reuses them**
- E. An address can produce at most one cache hit in a program

**9.** (F9) A parallel-program designer has already formed tasks and identified their communication. The designer now decides which processor will execute each task. Which design step is this?
- A. Communication identification
- B. Reduction
- C. Agglomeration
- D. Partitioning
- ✅ **E. Mapping**

**10.** (F10) A program assigns separate image regions to workers, each applying the same filter to its region. What kind of decomposition is used?
- A. A pipeline with one stage per worker
- B. Replication of the entire calculation on every worker
- C. A global reduction without partitioning
- D. Functional decomposition into different processing stages
- ✅ **E. Domain decomposition**

**11.** (F11) Two tasks repeatedly exchange a large intermediate buffer. Several processor assignments are otherwise equally balanced. Which mapping most directly aims to reduce communication cost?
- A. Split each buffer transfer into as many small messages as possible
- B. Move both tasks after every buffer exchange
- C. Assign them using task-name order without considering communication
- ✅ **D. Place the communicating tasks close to each other in the hardware topology**
- E. Place them as far apart as possible regardless of the interconnect

**12.** (F12) A grid update uses each cell and its immediate neighbors. Two workers own adjacent regions. What data typically needs to be exchanged between updates?
- A. Only the global number of cells
- B. The complete program executable on every iteration
- C. Every interior value even when no remote update uses it
- D. Only each worker’s final output after all updates finish
- ✅ **E. Boundary values needed by the neighboring region MPI**

**13.** (F13) Rank 0 has a parameter value that every rank needs. All ranks call the same collective with root 0. Which operation distributes that value without combining it with other values?
- A. MPI_Reduce with MPI_SUM
- B. MPI_Barrier
- C. MPI_Gather
- ✅ **D. MPI_Bcast**
- E. MPI_Scatter with different values for each rank

**14.** (F14) Ranks 0, 1, and 2 each send the two integers [rank, rank+10] to MPI_Gather at root 0. What is the order of the six integers in the root’s receive buffer?
- A. [3,33,0,0,0,0]
- B. [0,10,0,10,0,10]
- C. [2,12,1,11,0,10]
- D. [0,1,2,10,11,12]
- ✅ **E. [0,10,1,11,2,12]**

**15.** (F15) Rank 0 sends one message to rank 1 with tag 7 in MPI_COMM_WORLD. Which receive at rank 1 explicitly matches its source, tag, and communicator?
- A. Source 1, tag 7, MPI_COMM_WORLD
- B. Source 0, tag 7, MPI_COMM_SELF
- C. Source 0, tag 8, MPI_COMM_WORLD
- ✅ **D. Source 0, tag 7, MPI_COMM_WORLD**
- E. Source 1, tag 8, MPI_COMM_WORLD

**16.** (F16) A process starts MPI_Isend using buffer buf and then performs unrelated computation. When is it safe to overwrite buf for a new purpose?
- A. After changing the message tag variable in the caller
- B. As soon as another unrelated request completes
- C. Immediately after MPI_Isend returns, regardless of completion
- ✅ **D. After completion of that send has been confirmed, for example by MPI_Wait**
- E. After the receiving process’s rank has been printed

**17.** (F17) Two ranks each issue a blocking send to the other before posting their receive. The program must work even when MPI cannot buffer the messages. Which change directly avoids relying on that buffering?
- A. Add a barrier immediately before both blocking sends
- B. Print each rank number before its blocking send
- C. Give both messages the same tag without changing the order
- ✅ **D. Use MPI_Sendrecv to perform the paired send and receive**
- E. Use larger send buffers without changing the order

**18.** (F18) Two ranks have different private values of x and then call MPI_Barrier. No data-transfer operation is performed. What does the barrier guarantee?
- A. Each rank receives the sum of both values of x
- B. Rank 0’s x is copied to rank 1
- ✅ **C. Neither rank completes the barrier before both have entered it**
- D. Both private values of x become equal
- E. All ordinary variables become shared after the barrier OpenMP and hybrid programming

**19.** (F19) An array is shared by threads on one node. A loop updates each element independently exactly once. Which construct directly divides those iterations across a newly created team?
- A. #pragma omp barrier before the serial loop
- B. #pragma omp critical around the unchanged full loop
- ✅ **C. #pragma omp parallel for**
- D. #pragma omp single around the full loop
- E. #pragma omp parallel around the unchanged full loop

**20.** (F20) A variable t is declared outside an OpenMP parallel loop. Each iteration assigns t = a[i] * 2 and then uses t to write b[i]. Different iterations write different b elements. Which clause avoids races on t without serializing the loop?
- A. shared(t)
- ✅ **B. private(t)**
- C. collapse(1) alone
- D. nowait alone
- E. schedule(static) alone

**21.** (F21) Assume valid OpenMP execution. What is sum after this code? int sum = 0; #pragma omp parallel for reduction(+:sum) for (int i = 1; i <= 5; ++i) sum += 2*i;
- A. 60
- ✅ **B. 30**
- C. 15
- D. 25
- E. 10

**22.** (F22) Threads increment one shared integer counter. The update is only counter++. Which OpenMP construct can directly make this individual update atomic?
- A. A shared(counter) clause by itself
- ✅ **B. An atomic directive immediately before counter++**
- C. A barrier immediately before every unsynchronized counter++
- D. A static schedule by itself
- E. A private(counter) clause while still expecting a shared total

**23.** (F23) An OpenMP loop has iterations 0 through 11, three threads, and schedule(static,2). Which iterations are assigned to thread 2?
- A. 0, 1, 6, 7
- B. 2, 5, 8, 11
- C. 2, 3, 8, 9
- D. 6, 7, 8, 9
- ✅ **E. 4, 5, 10, 11**

**24.** (F24) A hybrid job runs 2 MPI processes on each of 3 nodes. Each process creates 4 OpenMP threads, including its primary thread. During those parallel regions, how many MPI processes and OpenMP threads are there in total?
- A. 3 processes and 12 threads
- B. 24 processes and 6 threads
- C. 6 processes and 18 threads
- ✅ **D. 6 processes and 24 threads**
- E. 2 processes and 24 threads MapReduce and distributed storage

**25.** (F25) Mappers emit (’x’,4), (’y’,2), (’x’,6), and (’y’,5). A reducer sums values for each key. What is the output, ignoring order?
- A. (’x’,4) and (’y’,6)
- ✅ **B. (’x’,10) and (’y’,7)**
- C. (’x’,6) and (’y’,5)
- D. (’x’,17) only
- E. (’x’,2) and (’y’,2)

**26.** (F26) Two mappers produce records with the same intermediate key. What must the shuffle and grouping stage ensure for ordinary per-key reduction?
- A. Each mapper’s records are reduced separately regardless of key
- B. They are assigned to different reducers to avoid duplicate keys
- C. Only the first record for that key is retained
- D. The records are grouped by their original input positions
- ✅ **E. Those records are assigned to the same reduce group**

**27.** (F27) A MapReduce job uses a combiner for local aggregation. Which correctness assumption should the job make?
- ✅ **A. The final answer must remain correct even if the combiner is not executed**
- B. The combiner is guaranteed to run exactly once on every mapper output
- C. The combiner can replace the reducer for any application
- D. Every key must be processed by one combiner only
- E. The reducer can assume the combiner has already seen every global value

**28.** (F28) For an inverted index, a reducer receives word ’parallel’ with document IDs [D1,D1,D3]. If the index should list each containing document once, what should this reducer output?
- A. ’parallel’ mapped to {D1} only
- ✅ **B. ’parallel’ mapped to {D1,D3}**
- C. D3 mapped to the integer 1 only
- D. ’parallel’ mapped to the integer 3
- E. D1 mapped to {’parallel’} only

**29.** (F29) An HDFS client has a file path but needs to know which machines store its blocks. Which component normally provides this metadata?
- A. The job’s last completed mapper
- B. An application’s partitioner
- C. The MapReduce combiner
- D. The reduce function
- ✅ **E. The NameNode**

**30.** (F30) An HDFS client has obtained the locations of a file’s blocks. Which statement describes the usual data-read path?
- A. The partitioner supplies the stored block contents
- B. The NameNode relays every block byte through itself
- C. The client asks a reducer to reconstruct every block
- D. The job scheduler sends the file’s bytes to the client
- ✅ **E. The client reads block bytes from the relevant DataNodes GPU and CUDA**

**31.** (F31) A CUDA kernel is launched as update<<<6,96>>>(...). How many blocks and total threads are requested?
- A. 96 blocks and 576 threads
- B. 6 blocks and 96 threads
- ✅ **C. 6 blocks and 576 threads**
- D. 96 blocks and 6 threads
- E. 6 blocks and 102 threads

**32.** (F32) A launch uses 5 blocks of 128 threads for an array with 600 elements. The kernel accesses the array only when i < 600. How many launched threads skip the guarded array operation?
- A. 128
- B. 24
- C. 88
- ✅ **D. 40**
- E. 600

**33.** (F33) A grid-stride loop uses 3 blocks of 64 threads. A thread starts at i = 5 and advances by blockDim.x * gridDim.x. For an array length of 500, which indices does it process?
- A. 5, 197 only
- B. 5, 192, 384
- ✅ **C. 5, 197, 389**
- D. 5, 8, 11
- E. 5, 69, 133, 197, 261, 325, 389, 453

**34.** (F34) In an explicit separate-memory CUDA program, a completed kernel has written a device output buffer. Which sequence lets the CPU use the values and then releases that device buffer?
- A. cudaFree the device buffer, then copy its contents to the host
- B. Call cudaMalloc again on the device pointer, then read the old values
- C. Call __syncthreads() on the host, then read the device pointer directly
- D. Assign the device pointer to a host pointer, then free it with free
- ✅ **E. Copy device output to a host buffer, then cudaFree the device buffer**

**35.** (F35) Each CUDA block cooperatively loads a tile reused only by threads in that block. Which memory space is designed for this block-level cooperation?
- A. Per-thread local memory
- B. Per-thread registers only
- ✅ **C. Shared memory**
- D. Host stack memory
- E. A private CPU cache line

**36.** (F36) After all threads in a block load their assigned shared-memory values, each thread reads values loaded by other threads. Where should a block barrier normally be placed?
- A. Only before the cooperative loads
- B. Only in the thread with the largest index
- ✅ **C. Between the cooperative loads and the cross-thread reads**
- D. Only after all cross-thread reads
- E. Only in threads whose loaded value is positive

**37.** (F37) Every active thread in a warp evaluates a branch condition as true. What can be concluded about that branch?
- ✅ **A. It does not split that warp into different branch paths**
- B. It forces all blocks in the grid to synchronize
- C. It converts all accesses inside the branch into shared-memory accesses
- D. It guarantees the entire kernel has no other performance bottleneck
- E. It necessarily causes divergence because it contains an if statement

**38.** (F38) A 2D CUDA block is configured as dim3(12,8). How many threads are in the block?
- A. 20
- B. 144
- ✅ **C. 96**
- D. 64
- E. 48

**39.** (F39) A binary sum reduction starts with 32 partial values and halves their number each round. How many combining rounds are needed to obtain one value?
- ✅ **A. 5**
- B. 4
- C. 16
- D. 6
- E. 32 Spark

**40.** (F40) The program defines r = sc.textFile(path), then s = r.filter(test), and finally n = s.count(). What normally causes the filter computation to execute?
- A. The definition of test before reading any data
- B. The existence of a file path string
- ✅ **C. The count action requesting its result**
- D. The assignment of the Python variable name s by itself
- E. Only a later call to collect, even after count

**41.** (F41) An RDD contains [1,2,3,4]. It is filtered with x % 2 == 0 and then mapped with x + 3. What values result, ignoring partition layout?
- A. [2,4]
- B. [4,5,6,7]
- C. [6,8]
- ✅ **D. [5,7]**
- E. [4,6]

**42.** (F42) A pair RDD contains (’p’,3), (’q’,5), (’p’,4), and (’q’,1). What does reduceByKey(addition) produce, ignoring output order?
- A. (’p’,13) only
- ✅ **B. (’p’,7) and (’q’,6)**
- C. (’p’,4) and (’q’,5)
- D. (’p’,2) and (’q’,2)
- E. (’p’,[3,4]) and (’q’,[5,1])

**43.** (F43) RDD A contains (’r’,2) and (’s’,8). RDD B contains (’r’,5) and (’t’,9). What does A.join(B) produce, ignoring output order?
- A. (’r’,(2,5)) and (’s’,(8,9))
- B. (’r’,7) only
- ✅ **C. (’r’,(2,5)) only**
- D. (’r’,(5,2)) only
- E. (’r’,(2,5)), (’s’,(8,0)), and (’t’,(0,9))

**44.** (F44) A very large RDD should remain distributed, but the developer wants to inspect five records. Which action most directly limits the records returned to the driver?
- ✅ **A. take(5)**
- B. cache()
- C. repartition(5)
- D. collect()
- E. count()

**45.** (F45) Which statement correctly distinguishes a Spark driver from executors in a cluster?
- A. Executors build the user’s application while the driver stores every partition
- B. The driver is simply another name for the first input partition
- C. Each RDD replaces the need for both a driver and executors
- ✅ **D. The driver coordinates work; executors run tasks on partitions**
- E. The driver runs all partition tasks and executors only store source code

**46.** (F46) All Spark tasks need a small lookup table that they will only read. Which feature is intended to distribute this shared input efficiently?
- ✅ **A. A broadcast variable**
- B. collect() on every task’s input
- C. An accumulator used as a mutable dictionary
- D. A global Python variable updated independently by each task
- E. A reduce action replacing the lookup table

**47.** (F47) A data set has named columns, and the application needs SQL-style filtering and aggregation. Which Spark component directly supports this structured-data use?
- A. The local[2] execution setting
- B. Only the RDD lineage metadata
- C. Only the accumulator API
- D. Spark’s broadcast-variable mechanism
- ✅ **E. Spark SQL PGAS and UPC**

**48.** (F48) A UPC program can address shared data associated with another thread. Which conclusion is valid?
- A. All shared accesses have the same cost regardless of affinity
- B. Every shared object has a separate independent copy on every thread
- C. A shared address can be dereferenced only by its affinity thread
- D. Shared addressing removes all need for synchronization
- ✅ **E. The data is globally addressable, but remote and local access costs may differ**

**49.** (F49) In UPC, a private variable is declared outside a shared-memory data structure. Different threads assign different values to their own instances. Which statement is correct?
- ✅ **A. Each thread retains its own private instance**
- B. Every write updates a replicated global shared variable
- C. All instances become equal at the next barrier
- D. The value written by the largest thread ID replaces every instance
- E. The variable automatically acquires affinity to thread 0

**50.** (F50) With THREADS = 4 and shared [3] int a[24], which thread has affinity to a[14]?
- A. Thread 1
- B. Thread 2
- ✅ **C. Thread 0**
- D. Every thread
- E. Thread 3

**51.** (F51) With THREADS = 3 and shared [2] int a[12], which indices have affinity to thread 1?
- A. 0, 1, 6, 7
- ✅ **B. 2, 3, 8, 9**
- C. 1, 4, 7, 10
- D. 4, 5, 10, 11
- E. 2, 3, 4, 5

**52.** (F52) All UPC threads must participate in creating one shared allocation and receive a pointer to that same allocation. Which routine fits this requirement?
- A. malloc called independently by every thread
- B. upc_memget
- ✅ **C. upc_all_alloc**
- D. upc_memput
- E. upc_global_alloc called independently by every thread

**53.** (F53) A UPC thread needs to read a shared data block into a private work buffer, modify that buffer, and copy it back. Which transfer sequence matches these directions?
- ✅ **A. upc_memget, then upc_memput**
- B. upc_memget, then upc_memget
- C. upc_memput, then upc_memget
- D. upc_memput, then upc_memput
- E. upc_all_alloc, then upc_global_alloc

**54.** (F54) A UPC lock protects an update to a shared counter. Which behavior is guaranteed when all updating threads use that same lock correctly?
- A. Every lock operation also completes a global barrier
- ✅ **B. The protected updates do not execute concurrently**
- C. Each thread gets a private copy of the shared counter
- D. The counter’s affinity changes to each thread that locks it
- E. The updates occur in increasing MYTHREAD order Basic parallel graph algorithms

**55.** (F55) A graph application needs shortest-path distances between every pair of vertices, rather than from only one source. Which algorithm from the lecture directly addresses this task?
- A. A connected-components labeling algorithm
- ✅ **B. Floyd’s algorithm**
- C. A single run of Dijkstra from one fixed source
- D. Prim’s algorithm
- E. A Boolean transitive-closure calculation

**56.** (F56) A transitive-closure matrix marks vertex V as reachable from vertex U. What does this establish?
- ✅ **A. There is a path from U to V**
- B. Every path from U must end at V
- C. There must be a direct edge from U to V
- D. U and V have exactly the same neighbors
- E. The shortest path from U to V has weight 1

**57.** (F57) For an unweighted undirected graph, its adjacency matrix has A[2][5] = 1. What must be true of A[5][2]?
- ✅ **A. It is also 1**
- B. It must be 0
- C. It can differ because the graph is undirected
- D. It equals the number of vertices
- E. It equals the length of the shortest path from 2 to 5

**58.** (F58) Three valid spanning trees of the same weighted graph have total edge weights 14, 11, and 16. Among these candidates, which is preferred by the minimum-spanning-tree objective?
- A. The tree with total weight 14
- B. The tree with the greatest number of branches, regardless of weight
- C. All three, because every spanning tree has equal cost
- ✅ **D. The tree with total weight 11**
- E. The tree with total weight 16

**59.** (F59) Two routes connect U to V. Route 1 has edge weights 4 and 5; route 2 has weights 2, 3, and 3. Which route has smaller total weight?
- A. Route 2, with total weight 6
- ✅ **B. Route 2, with total weight 8**
- C. Route 1, because it contains fewer edges regardless of weight
- D. Route 1, with total weight 9
- E. Both, because their total weights are equal

**60.** (F60) A weighted graph has nonnegative edge weights. The task is to find shortest-path distances from one chosen source to all reachable vertices. Which algorithm directly matches this task?
- A. An adjacency-list construction alone
- B. A connected-components labeling algorithm
- ✅ **C. Dijkstra’s algorithm**
- D. Prim’s minimum spanning tree algorithm
- E. A Boolean transitive-closure calculation


## HPC_Endterm_sample

**61.** (E1) In the heterogeneous CUDA model taught in the lecture, which work assignment is most typical?
- A. The CPU and GPU must execute every instruction together
- B. The CPU is used only after all device computations finish
- C. The GPU manages host files and the CPU executes all kernel threads
- D. Each CUDA thread is a separate CPU process
- ✅ **E. The CPU manages execution and the GPU runs highly parallel kernels**

**62.** (E3) A 1D kernel uses i = blockIdx.x * blockDim.x + threadIdx.x. If blockIdx.x = 3, blockDim.x = 64, and threadIdx.x = 5, what is i?
- A. 192
- B. 320
- C. 196
- ✅ **D. 197**
- E. 69

**63.** (E5) One thread processes one element. For N = 1000 and 256 threads per block, how many blocks are needed to cover all elements?
- A. 8
- ✅ **B. 4**
- C. 3
- D. 256
- E. 5

**64.** (E6) A launch creates 1024 threads for an array of 1000 elements. What is the main purpose of if (i < N) before accessing a[i]?
- A. Synchronize the final block with the first block
- ✅ **B. Prevent the extra threads from accessing elements outside the array**
- C. Make the last block contain fewer physical threads at launch
- D. Copy the remaining elements into shared memory
- E. Force all blocks to finish in index order

**65.** (E9) A kernel launches blocks numbered 0 through 7. Which execution-order assumption is safe?
- A. All blocks must be resident at the same time
- B. Block 0 always finishes before block 1 starts
- ✅ **C. The program must not rely on blocks completing in numerical order**
- D. A lower block index always has priority over a higher one
- E. Blocks always finish in reverse numerical order

**66.** (E13) Which situation most directly causes branch divergence within a warp?
- A. All threads in a warp take the same branch
- B. Every thread reads a different adjacent array element
- ✅ **C. Some threads take one branch while other threads in the same warp take another**
- D. Two separate kernels use different functions
- E. Different blocks contain different thread counts across separate launches

**67.** (E16) Why can Spark be useful for an iterative algorithm that reuses the same data many times?
- A. It requires a separate cluster for each iteration
- B. It runs every iteration entirely on the driver
- C. It guarantees that no computation will ever access disk
- D. It automatically removes all algorithmic dependencies
- ✅ **E. It can retain reusable data in memory between iterations**

**68.** (E18) Which operation explicitly redistributes an RDD into a requested number of partitions?
- A. map(lambda x: x)
- B. count()
- C. take(n)
- ✅ **D. repartition(n)**
- E. cache()

**69.** (E20) An RDD contains the strings ’red blue’ and ’green’. Which operation produces individual word records from splitting each string?
- ✅ **A. flatMap(lambda s: s.split())**
- B. count()
- C. filter(lambda s: s.split())
- D. map(lambda s: s.split())
- E. reduce(lambda a,b: a+b)

**70.** (E21) What does filter(lambda x: x > 3) produce from [1,4,2,5]?
- A. The original four records with new indices
- B. The Boolean records False, True, False, True
- ✅ **C. The records 4 and 5**
- D. The single value 9
- E. The records 1 and 2

**71.** (E27) Workers need to contribute numeric updates to a total that the driver can inspect. Which feature fits this role?
- A. A sortByKey operation on unrelated records
- B. The RDD’s partition count
- C. A shared ordinary Python global variable
- ✅ **D. An accumulator**
- E. A broadcast variable

**72.** (E28) An accumulator starts at zero and is incremented inside a lazy transformation. No action has run. What value should be expected when the driver reads it at this point?
- ✅ **A. 0**
- B. The number of transformation calls written in the program
- C. The number of workers
- D. The number of input records
- E. The number of partitions

**73.** (E29) Which Spark library is intended for SQL queries and structured DataFrames?
- A. SparkContext
- B. Spark Streaming
- ✅ **C. Spark SQL**
- D. GraphX
- E. MLlib

**74.** (E34) In the UPC declarations shared int x; and int y;, which statement is correct?
- A. x is shared only among threads with even indices
- B. Both declarations create one globally shared scalar
- C. Both declarations create one private copy per thread
- D. There is a private x and one shared y
- ✅ **E. There is one shared x and a private y for each thread**

**75.** (E36) Which statement about a UPC pointer-to-shared is correct?
- ✅ **A. It can reference shared objects with local or remote affinity**
- B. It makes every referenced object private
- C. It must be stored in shared memory itself
- D. It can reference only the calling thread’s private stack
- E. It always points to a fully replicated copy

**76.** (E37) Which allocation routine is collective and returns a pointer to the same shared allocation to all participating threads?
- A. malloc
- B. upc_free
- ✅ **C. upc_all_alloc**
- D. upc_memget
- E. upc_global_alloc

**77.** (E38) Which routine copies bytes from a private source buffer into shared destination memory?
- ✅ **A. upc_memput**
- B. upc_memcpy
- C. upc_free
- D. upc_memget
- E. upc_memset

**78.** (E39) What is the main role of the affinity expression in upc_forall?
- A. Make all iterations execute on every thread
- B. Specify the number of bytes in the loop variable
- C. Allocate the shared output array
- D. Insert a barrier after each iteration
- ✅ **E. Determine which thread executes each independent iteration**

**79.** (E41) Which description defines a tree in the undirected setting?
- ✅ **A. A connected graph with no cycles**
- B. A connected graph with every possible edge
- C. Any graph in which every vertex has degree two
- D. A graph with exactly one cycle
- E. Any graph with weighted edges

**80.** (E45) What does a minimum spanning tree minimize?
- A. The shortest-path distance from every vertex to every other vertex
- B. The sum of all edges in the original graph, including unused edges
- ✅ **C. The sum of the weights of its selected edges**
- D. The number of vertices included
- E. The largest vertex identifier

**81.** (E47) What problem does Dijkstra’s algorithm address for graphs with nonnegative edge weights?
- ✅ **A. Shortest paths from one source to other vertices**
- B. A maximum-weight spanning tree
- C. A list of all possible cycles
- D. A minimum spanning tree by total edge weight
- E. A partition into connected components only

**82.** (E48) Two available routes from S to T have edge weights (2,3) and (1,6). Which route has the smaller total weight?
- A. The route with weights 1 and 6
- B. The route with the smaller first edge regardless of the second
- ✅ **C. The route with weights 2 and 3**
- D. Neither route because each contains two edges
- E. They have equal total weight

**83.** (E49) How does the all-pairs shortest-path problem differ from single-source shortest paths?
- A. It ignores edge weights in every graph
- ✅ **B. It asks for shortest paths between every pair of vertices**
- C. It asks only whether the graph contains a cycle
- D. It finds only one minimum spanning tree
- E. It asks only for edges adjacent to one chosen vertex

**84.** (E50) Once the next vertex has been selected and announced, which work can different processors do in parallel in the lecture’s formulation?
- A. Independently choose incompatible global next vertices
- ✅ **B. Update their own assigned portions of the distance or key array**
- C. Replace the graph with an unrelated complete graph
- D. Skip all later communication even when needed
- E. Change other processors’ source programs


## HPC_sample_midterm

**85.** (M5) A simulation has 5 x 10^8 cells, performs 200 floating-point operations per cell per step, and runs for 10^4 steps. How many operations are required?
- ✅ **A. 10^15**
- B. 5 x 10^14
- C. 5 x 10^15
- D. 10^13
- E. 10^14

**86.** (M9) The best sequential version takes 120 seconds and a parallel version on 8 processors takes 20 seconds. What is the speedup?
- A. 4
- B. 5
- C. 8
- ✅ **D. 6**
- E. 10 HPC and Big Data                                                                  Practice questions

**87.** (M10) Why can a parallel version run more slowly than a sequential version on a small input?
- A. The number of processors replaces execution time in the speedup formula
- B. Having fewer iterations per worker guarantees lower total runtime
- C. Idle workers increase useful arithmetic work by definition
- D. Dividing the data changes the sequential baseline to the sum of worker times
- ✅ **E. Communication and synchronization overhead can exceed the computation saved Memory and parallel design**

**88.** (M11) A loop repeatedly accesses a small data set that remains in cache after its first pass. Why are later passes likely to spend less time waiting for data?
- A. Main memory becomes physically larger after the first pass
- ✅ **B. More accesses can be served from cache instead of lower memory levels**
- C. The cache permanently increases the clock frequency
- D. Each later pass necessarily executes fewer loop iterations
- E. The first pass eliminates the arithmetic in later passes

**89.** (M14) A program reads a[0], a[1], a[2], and a[3] consecutively. Which feature most directly helps this access pattern?
- A. Assigning each adjacent element to a different cache line
- B. Increasing the stride between consecutive accesses
- C. Keeping only the most recently used element rather than its neighbors
- D. Reusing the same individual element many times
- ✅ **E. A cache line containing neighboring array elements HPC and Big Data                                                                  Practice questions**

**90.** (M18) A simulation divides its spatial grid into regions and applies the same update to each region. Which approach is this?
- A. Agglomeration of different functions
- B. Dynamic mapping
- C. Functional decomposition
- ✅ **D. Domain decomposition**
- E. Collective communication

**91.** (M21) Each process has one local maximum, and every process needs the global maximum. Which single collective is most appropriate?
- ✅ **A. MPI_Allreduce with MPI_MAX**
- B. MPI_Bcast of rank 0’s local maximum
- C. MPI_Allgather of all local maxima
- D. MPI_Reduce with MPI_MAX
- E. MPI_Allreduce with MPI_SUM

**92.** (M23) A process belongs to two different communicators. Which statement is correct?
- A. Its rank is its physical core number in both communicators
- B. It must have different ranks in both communicators
- ✅ **C. It may have different ranks in the two communicators**
- D. Its rank must equal the total number of its communicators
- E. It must have the same rank in both communicators

**93.** (M39) Assume valid OpenMP execution. What is sum after this code? int sum = 0; #pragma omp parallel for reduction(+:sum) for (int i = 1; i <= 4; ++i) sum += i;
- A. 8
- B. 6
- C. 16
- ✅ **D. 10**
- E. 4

**94.** (M40) A cluster application uses MPI between nodes and OpenMP within each process. What is one potential advantage over keeping many separate copies in MPI processes on a node?
- ✅ **A. Threads can share suitable data and reduce replication within each process**
- B. All process-private arrays become globally shared automatically
- C. The serial fraction disappears when both models are used
- D. MPI messages become unnecessary between nodes
- E. Every hybrid configuration must outperform an MPI-only configuration MapReduce and distributed storage

**95.** (M41) Which task is directly suited to a single basic MapReduce job?
- ✅ **A. Compute total sales per product from many independent transaction records**
- B. Modify one shared mutable record after every individual input record
- C. Update a state through a strict chain where each step needs the previous result
- D. Exchange grid-boundary values repeatedly within every map call
- E. Perform each iteration only after a global convergence check from the previous iteration

**96.** (M42) Two mappers emit (apple,2) and (apple,3). What grouped input should the sum reducer receive for apple?
- A. Key apple with the single value [5]
- ✅ **B. Key apple with values [2,3]**
- C. Key 2 with value apple and key 3 with value apple
- D. Key apple with values [1,1]
- E. Two independent reduce groups, one with [2] and one with [3] HPC and Big Data                                                              Practice questions

**97.** (M47) What is the primary purpose of a combiner in a word-count job?
- A. Combine all global counts before any mapper finishes
- B. Choose which reducer owns each key
- C. Guarantee that each word occurs on only one mapper
- D. Sort the final output across all reducers
- ✅ **E. Aggregate local counts to reduce intermediate network traffic HPC and Big Data                                                               Practice questions**

**98.** (M50) After obtaining block locations, where does an HDFS client normally get the actual file-block bytes?
- ✅ **A. Directly from the relevant DataNodes**
- B. From the scheduler that allocated the job
- C. From the mapper responsible for the filename
- D. Through the NameNode, which relays every block
- E. From the reducer assigned to the file’s first key HPC and Big Data                                                              Practice questions
