<ListView
  dataSource={dataSource}
  renderRow={(ticket) => this.renderTicket(ticket)}
  />


        <View style={styles.filterBar}>
        
          <View style={[styles.filterButton, this._isSelected('todo') && styles.active]}>
            <TouchableOpacity onPress={this.props.onClick.bind(this,'todo')}>
              <Text style={styles.filterText}>
                To Do
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.filterButton, this._isSelected('inprogress') && styles.active]}>
            <TouchableOpacity onPress={this.props.onClick.bind(this,'inprogress')}>
              <Text style={styles.filterText}>
                In Progress
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.filterButton, this._isSelected('completed') && styles.active]}>
            <TouchableOpacity onPress={this.props.onClick.bind(this,'completed')}>
              <Text style={styles.filterText}>
                Complete
              </Text>
            </TouchableOpacity>
          </View>
        </View>